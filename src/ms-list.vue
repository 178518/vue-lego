<template>
  <div v-on:click="handClick">Add Items</div>
  <comm-list :prodcuts="products"></comm-list>
</template>

<script>
  //基于ES6的抒写规范,具体的style 业务逻辑 controller控制等
  import CommList from './components/comm-list.vue'
  import Pubsub from 'pubsub-js'

  export default{
    data () {
      return {
        products: window.productList
      }
    },
    //在创建实例时 `events` 选项简单地调用 `$on`
    events: {
      //接收到下层传上来的 clickProduct
      'clickProduct': function (prodcut) {
        console.log('receive complete by vue!');
        console.log(prodcut);
      }
    },
    methods: {
      handClick: function () {
        this.products.unshift({
          imgUrl: 'https://ae01.alicdn.com/kf/HTB1gd2ALVXXXXcRXpXXq6xXFXXXD/Hot-Sexy-Push-Up-Bikinis-Women-Swimwear-Retro-Low-Waist-Bandage-Swimsuit-Print-Cut-Out-Bikini.jpg_350x350.jpg',
          price: 'US $ 9.64'
        });
      }
    },
    created() {
      //钩子的 this 指向调用它的 Vue 实例。
      console.log('children created!');
      console.log(this);
    },
    beforeCompile() {
      //console.log('children beforeCompile!');
      //console.log(this);
    },
    compiled() {
      //console.log('children compiled!');
      //console.log(this);
    },
    ready() {
      //console.log('children ready!');
      //console.log(this);
      //订阅事件
      this.clickProductSubscribe = Pubsub.subscribe('clickProduct', function (msg, data) {
        // 获得选项信息，进行相应处理
        //console.log('receive complete by Pubsub!');
        //console.log(data);
      });
    },
    beforeDestroy() {
      console.log('children beforeDestroy!');
      console.log(this);
    },
    destroyed() {
      //console.log('children destroyed!');
      //console.log(this);
    },
    components: {
      CommList
    }
  }

</script>
