<template>
  <div class="product" v-on:click="handClick">
    <ms-img :imgurl="prodcut.imgUrl"></ms-img>
    <ms-price :price="prodcut.price"></ms-price>
  </div>
</template>

<style lang="less">
  .product {
    margin: 0 4px 8px 4px;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
  }
</style>

<script>
  import MsImg from './img.vue'
  import MsPrice from './price.vue'

  export default{
    props: {
      prodcut: {
        type: Object,
        required: true
      }
    },
    methods: {
      handClick: function () {
        console.log(this.prodcut);
      }
    },
    components: {
      MsImg,
      MsPrice
    }
  }
</script>
