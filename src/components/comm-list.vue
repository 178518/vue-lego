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
  import Product from './product.vue'

  export default{
    props: {
      prodcuts: {
        type: Array,
        required: true
      }
    },
    components: {
      Product
    }
  }
</script>
