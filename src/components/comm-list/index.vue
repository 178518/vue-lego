<template>
  <div class="product-list">
    <ul class="util-clearfix">
      <li v-for="item in prodcuts">
        <product :prodcut="item"></product>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
  .product-list {
    padding: 8px 4px;
  }

  .product-list li {
    width: 50%;
    float: left;
  }
</style>

<script>
  import Product from '../product/index.vue'

  //父传子方法,属性传递 props
  export default{
    props: {
      prodcuts: {
        type: Array,
        required: true
      }
    },
    events: {
      clickAdd: function () {
        console.log('parent Add has Click!');
      }
    },
    components: {
      Product
    }
  }
</script>
