<template>
  <div class="ms-price ms-text-align">{{price}}</div>
</template>

<style lang="less">
  .ms-price {
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    color: #3E3E3E;
    background: #fff;
    text-align: center;
    overflow: hidden;
  }
</style>

<script>
  export default{
    props: {
      price: {
        type: String,
        required: true
      }
    },
    events: {
      handImgClick: function (imgObject) {
        console.log('i know img is click!');
        console.log(imgObject);
      }
    }
  }
</script>
