<template>
  <div class="product-list">
    <ul class="util-clearfix">
      <li v-for="item in items">
        <product :prodcut="item"></product>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
  .product-list {
    padding: 4px;
  }

  .product-list li {
    width: 50%;
    float: left;
  }
</style>

<script>
  //import Product from './components/product/index.vue'
  import Product from 'vue-lego/index.vue'

  export default{
    data () {
      return {
        items: window.productList
      }
    },
    methods: {},
    components: {
      Product
    }
  }
</script>
