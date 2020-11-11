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

    <Card :cardList="cardList" />
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
      cardList: CardData,
    };
  },
  methods: {
    sortTypeChange(sortType) {
      console.log(sortType);
      switch (sortType) {
        case 'priceAscending':
          this.cardList = this.cardList.sort((a, b) => a.Price - b.Price);
          break;
        case 'priceDescending':
          this.cardList = this.cardList.sort((a, b) => b.Price - a.Price);
          break;
        case 'headingSortAZ':
          this.cardList = this.cardList.sort((a, b) => {
            if (a.Heading < b.Heading) { return -1; }
            if (a.Heading > b.Heading) { return 1; }
            return 0;
          });
          break;
        case 'subHeadingSortAZ':
          this.cardList = this.cardList.sort((a, b) => {
            if (a.Subheading < b.Subheading) { return -1; }
            if (a.Subheading > b.Subheading) { return 1; }
            return 0;
          });
          break;
        default:
          break;
      }
    },
    initCards(cards) {
      this.cardList = cards;
    },
  },
  mounted() {
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
