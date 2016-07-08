<template>
  <div class="ms-text"
       v-bind:style="{width:width,maxHeight:maxHeight,lineHeight:lineHeight,fontSize:fontSize,webkitLineClamp:line}">
    <slot></slot>
  </div>
</template>

<style lang="less">
  .ms-text {
    width: 100%;
    max-height: 20px;
    line-height: 20px;
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    display: box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>

<script>
  export default{
    props: {
      width: {
        type: String
      },
      maxHeight: {
        type: String
      },
      lineHeight: {
        type: String
      },
      fontSize: {
        type: String
      },
      line: {
        type: Number
      }
    }
  }
</script>
