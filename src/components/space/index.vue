<template>
  <div class="ms-space" v-bind:style="{background:background,height:height + 'px'}"></div>
</template>

<style lang="less">
  .ms-space {
    width: 100%;
  }
</style>

<script>
  export default{
    props: {
      background: {
        type: String,
        default: function () {
          return '#EBEBED'
        }
      },
      height: {
        type: Number,
        default: function () {
          return 8
        }
      }
    }
  }
</script>
