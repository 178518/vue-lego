<template>
  <container>
    <div class="product-list">
      <ul class="util-clearfix">
        <li v-for="item in prodcuts">
          <product :prodcut="item"></product>
        </li>
      </ul>
    </div>
    <loading color="spinner-red-only" :active="true"></loading>
  </container>

  <!--<loading color="spinner-red-only" :active="true"></loading>
  <loading type="big" color="spinner-blue-only" :active="true"></loading>
  <loading color="spinner-yellow-only" :active="true"></loading>
  <loading type="big" color="spinner-green-only" :active="true"></loading>

  <space background="blue" :height="40" ></space>-->
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
  import Loading from '../loading/index.vue'
  import Container from '../container/index.vue'
  import Space from '../space/index.vue'

  //父传子方法,属性传递 props
  export default{
    props: {
      prodcuts: {
        type: Array,
        required: true
      },
      type: {
        type: String
      },
      active: {
        type: Boolean
      }
    },
    events: {
      clickAdd: function () {
        console.log('parent Add has Click!');
      },
      scrollToBottom: function (scrollObject) {
        console.log('parent');

        setTimeout(function () {
          scrollObject.loading = false;
        }, 5000);
      }
    },
    components: {
      Product,
      Loading,
      Container,
      Space
    }
  }
</script>
