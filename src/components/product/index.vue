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
  import MsImg from '../img/index.vue'
  import MsPrice from '../price/index.vue'
  import Pubsub from 'pubsub-js'

  export default{
    props: {
      prodcut: {
        type: Object,
        required: true
      }
    },
    events: {
      handImgClick: function (imgObject) {
        console.log('receive event from img child and boradcast to child');
        this.$broadcast('handImgClick', imgObject)
      }
    },
    methods: {
      handClick: function () {
        //console.log(this.prodcut);
        //使用 $dispatch() 派发事件，事件沿着父链冒泡
        this.$dispatch('clickProduct', this.prodcut);
        // 发布事件
        //Pubsub.publish('clickProduct', {product: this.prodcut});
        //console.log('message publish complete!');
      }
    },
    components: {
      MsImg,
      MsPrice
    }
  }
</script>
