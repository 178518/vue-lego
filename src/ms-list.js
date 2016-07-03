var Vue = require('vue');
var MsList = require('./ms-list.vue');

//实例化VUE组件,将组建渲染到对应的容器里面,尽量简单化
var MsList = new Vue({
  el: '#product-list',
  created: function () {
    //钩子的 this 指向调用它的 Vue 实例。
    console.log('created!');
    console.log(this);
  },
  beforeCompile: function () {
    console.log('beforeCompile!');
    console.log(this);
  },
  compiled: function () {
    console.log('compiled!');
    console.log(this);
  },
  ready: function () {
    console.log('ready!');
    console.log(this);
  },
  beforeDestroy: function () {
    console.log('beforeDestroy!');
    console.log(this);
  },
  destroyed: function () {
    console.log('destroyed!');
    console.log(this);
  },
  components: {
    msList: MsList
  }
});


