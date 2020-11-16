<template>
  <div class="dashboard">
     <div class="sorting-buttons">
      <v-btn
        v-on:click="changeSortType('priceAscending')"
        elevation="1"
      >Price Low to High</v-btn>
      <v-btn
        v-on:click="changeSortType('priceDescending')"
        elevation="1"
      >Price High to Low</v-btn>
      <v-btn
        v-on:click="changeSortType('headingSortAZ')"
        elevation="1"
      >Heading A to Z</v-btn>

      <v-btn
        v-on:click="changeSortType('subHeadingSortAZ')"
        elevation="1"
      >Sub Heading A to Z</v-btn>
    </div>

    <v-pagination
      v-model="currentPage"
      :length="numberOfPages"
      @input="handlePageChange"
    ></v-pagination>

    <card-grid :cardList="currentCardList"/>

    <v-pagination
      v-model="currentPage"
      :length="numberOfPages"
      @input="handlePageChange"
    ></v-pagination>
  </div>
</template>

<script>
import cardGrid from '@/components/Card.vue';
import arrayUtils from '@/utils/array';
import CardData from '../services/cardData.json';

export default {
  name: 'Dashboard',
  components: {
    cardGrid,
  },
  data() {
    return {
      numberOfPages: 0,
      prevPage: 0,
      cardsPerPage: 20,
      cardList: [],
      currentCardList: [],
      currentPage: 1,
    };
  },
  methods: {
    buildCardList(sorted) {
      const multi = arrayUtils.spliceArray(sorted, this.cardsPerPage);
      this.cardList = multi;
      this.currentCardList = multi[this.currentPage - 1];
    },
    handlePageChange(value) {
      this.currentCardList = this.cardList[this.currentPage - 1];
      this.prevPage = value;
      this.currentPage = value;
    },
    changeSortType(sortType) {
      switch (sortType) {
        case 'priceAscending':
          this.priceSort('ascending');
          break;
        case 'priceDescending':
          this.priceSort('descending');
          break;
        case 'headingSortAZ':
          this.headingSort('headingAtoZ');
          break;
        case 'subHeadingSortAZ':
          this.headingSort('subHeadingAtoZ');
          break;
        default:
          break;
      }
    },
    headingSort(sortType) {
      const sortedCards = arrayUtils
        .flatten(this.cardList)
        .sort((a, b) => {
          if (sortType === 'headingAtoZ') {
            if (a.Heading < b.Heading) { return -1; }
            if (a.Heading > b.Heading) { return 1; }
          } else if (sortType === 'subHeadingAtoZ') {
            if (a.Subheading < b.Subheading) { return -1; }
            if (a.Subheading > b.Subheading) { return 1; }
          }
          return 0;
        });

      this.buildCardList(sortedCards);
    },
    priceSort(sortType) {
      let sortedCards;
      if (sortType === 'ascending') {
        sortedCards = arrayUtils
          .flatten(this.cardList)
          .sort((a, b) => a.Price - b.Price);
      } else if (sortType === 'descending') {
        sortedCards = arrayUtils
          .flatten(this.cardList)
          .sort((a, b) => b.Price - a.Price);
      }

      this.buildCardList(sortedCards);
    },
    initCards(cards) {
      this.currentCardList = cards;
    },
  },
  beforeMount() {
    // Splice the Array based on how many cards per page.
    const splicedArray = arrayUtils.spliceArray(CardData, this.cardsPerPage);

    this.numberOfPages = splicedArray.length;
    this.cardList = splicedArray;
    this.currentCardList = splicedArray[this.currentPage - 1];
    this.initCards(this.currentCardList);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard {
  background-color: #9bc6e2;
  height: 100%;
}
.label {
  text-align: center;
  padding: 5px 0;

  @media (min-width: 535px) {
    padding: 0 5px;
  }
}
.show-pagination-button {
  margin-bottom: 30px;
}
.sorting-buttons {
  padding: 15px 35px;
  align-items: center;
  display: grid;
  justify-content: center;
  grid-template-columns: auto;
  grid-gap: 13px;

  @media (min-width: 535px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 845px) {
    grid-template-columns: auto auto auto auto;
  }
}
button {
  margin: 5px 0;

  @media (min-width: 535px) {
    margin: 0 5px;
  }
}
</style>
