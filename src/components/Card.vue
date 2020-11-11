<template>
  <div class="container">

    <div class="card"
      v-for="(card, index) of cardList" :key="index">

     <div class="image-container">
         <img v-if="card.Image == ''" alt="Vue logo" src="@/assets/imagePlaceholder.jpg">
         <img v-if="card.Image == 'image1'" alt="Vue logo" src="@/assets/image1.jpg">
     </div>

     <div class="content">
      <h3 class="text heading"> {{card.Heading}} </h3>
      <div class="text subHeading"> {{card.Subheading}} </div>
     </div>

      <div class="price">
        <div class="text"> {{card.Price | currency}} </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardList: Array,
  },
  mounted() {
    console.dir(this.cardList);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  $card-width: 135px;
  $borderRadius: 10px;

  .image-container {
    border-top-left-radius: $borderRadius;
    border-top-right-radius: $borderRadius;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100px;
  }

  .container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, $card-width);
    grid-gap: 13px;
    color: #444;

    @media (min-width: 480px) {
      grid-template-columns: repeat(3, $card-width);
      grid-template-rows: 1.3fr 1.5fr 1.3fr;
    }

    @media (min-width: 780px) {
      grid-template-columns: repeat(5, $card-width);
    }

  }
  .card {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: white;
    padding-bottom: 5px;

    .content {
      position: relative;
      display: flex;
      flex: 1;
      text-align: left;
      flex-direction: column;
      height: 80%;
      padding: 5px 12px 30px 12px;
    }

    .price {
      float: right;
      color: limegreen;
      font-weight: 900;
      padding: 5px;
      border-top: solid 1px lightgray;
      display: flex;
      flex-direction: row-reverse;
      margin: 0 10px;
    }

    .text {
      font-size: 12px;
      margin: 0;
      padding: 0;
    }

    .heading {
      font-size: 13px;
    }
  }
</style>
