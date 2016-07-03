<template>
  <div class="ms-pic">
    <img :src="imgurl"/>
  </div>
</template>

<style>
  .ms-pic {
    background: #fff;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    min-width: 148px;
    min-height: 148px;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    overflow: hidden;
  }
</style>

<script>
  export default{
    props: {
      imgurl: {
        type: String,
        required: true
      }
    }
  }
</script>
