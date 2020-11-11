<template>
  <div class="dashboard">
     <div class="sorting-buttons">
      <v-btn
        v-on:click="sortTypeChange('priceAscending')"
        elevation="1"
      >Price Low to High</v-btn>
      <v-btn
        v-on:click="sortTypeChange('priceDescending')"
        elevation="1"
      >Price High to Low</v-btn>
      <v-btn
        v-on:click="sortTypeChange('headingSortAZ')"
        elevation="1"
      >Heading A to Z</v-btn>

      <v-btn
        v-on:click="sortTypeChange('subHeadingSortAZ')"
        elevation="1"
      >Sub Heading A to Z</v-btn>
    </div>

    <div class="text-center">
      <v-btn
        class="show-pagination-button"
        v-on:click="showPaginationVerion()"
        elevation="1"
      >Show Pagination Version</v-btn>
      <v-pagination
        v-if="paginationVersion"
        v-model="currentPage"
        :length="numberOfPages"
        @input="handlePageChange"
      ></v-pagination>
    </div>

    <div class="cards">
      <Card :cardList="currentList" />
    </div>

  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import CardData from '../services/cardData.json';

export default {
  name: 'Dashboard',
  components: {
    Card,
  },
  data() {
    return {
      numberOfPages: 0,
      cardList: [],
      currentList: [],
      prevPage: 0,
      currentPage: 1,
      paginationVersion: false,
    };
  },
  methods: {
    handlePageChange(value) {
      this.currentList = this.cardList[this.currentPage - 1];
      this.prevPage = value;
      this.currentPage = value;
    },
    sortTypeChange(sortType) {
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
    headingSort(headingType) {
      const sorted = this.flatten(this.cardList).sort((a, b) => {
        if (headingType === 'headingAtoZ') {
          if (a.Heading < b.Heading) { return -1; }
          if (a.Heading > b.Heading) { return 1; }
        } else if (headingType === 'subHeadingAtoZ') {
          if (a.Subheading < b.Subheading) { return -1; }
          if (a.Subheading > b.Subheading) { return 1; }
        }
        return 0;
      });

      const multi = this.spliceArray(sorted);
      this.cardList = multi;
      this.currentList = multi[this.currentPage - 1];
    },
    priceSort(sortType) {
      if (this.paginationVersion) {
        let sorted;
        if (sortType === 'ascending') {
          sorted = this.flatten(this.cardList).sort((a, b) => a.Price - b.Price);
        } else if (sortType === 'descending') {
          sorted = this.flatten(this.cardList).sort((a, b) => b.Price - a.Price);
        }
        const multi = this.spliceArray(sorted);
        this.cardList = multi;
        this.currentList = multi[this.currentPage - 1];
      } else if (sortType === 'ascending') {
        this.currentList = this.currentList.sort((a, b) => a.Price - b.Price);
      } else if (sortType === 'descending') {
        this.currentList = this.currentList.sort((a, b) => b.Price - a.Price);
      }
    },
    flatten(arr) {
      const flattened = arr.reduce((acc, curVal) => acc.concat(curVal), []);
      return flattened;
    },
    spliceArray(arr) {
      const newArr = [];

      while (arr.length) {
        newArr.push(arr.splice(0, 5));
      }
      return newArr;
    },
    initCards(cards) {
      this.currentList = cards;
    },
    initPagination() {
      const newArr = this.spliceArray(CardData);
      this.numberOfPages = newArr.length;
      this.cardList = newArr;
      this.currentList = newArr[this.currentPage - 1];
      this.initCards(this.currentList);
    },
    showPaginationVerion() {
      this.paginationVersion = !this.paginationVersion;
      this.initPagination();
    },
  },
  beforeMount() {
    this.initCards(CardData);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard {
  padding-top: 65px;
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
