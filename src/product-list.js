var Vue = require('vue');
var ProductList = require('./product-list.vue');

//实例化VUE组件
new Vue({
  el: '#product-list',
  components: {
    productList: ProductList
  }
});
