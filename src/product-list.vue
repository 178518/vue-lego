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
  import Product from './components/product.vue'

  export default{
    //在创建实例时 `events` 选项简单地调用 `$on`
    events: {
      //接收到下层传上来的 clickProduct
      'clickProduct': function (prodcut) {
        console.log(prodcut);
      }
    },
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
