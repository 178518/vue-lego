<template>
  <div v-bind:style="{padding:padding}" v-on:click="handClick">
    <slot></slot>
  </div>
</template>

<style lang="less">

</style>

<script>
  import jQuery from 'jquery'

  export default{
    props: {
      padding: {
        type: String,
        default: function () {
          return '8px'
        }
      },
      loading: {
        type: Boolean,
        default: function () {
          return false
        }
      }
    },
    events: {
      emitFun: function () {
        console.log('emitFun');
      }
    },
    methods: {
      handClick: function () {
        //基于on绑定事件必须小写,不支持驼峰命名,暂不清楚原因
        this.$dispatch('container-click');
      }
    },
    ready() {
      let self = this;
      jQuery(window).on('scroll', function () {
        /**
         * 判断是否滚动到触发容器
         */
        var scrollTop = jQuery(this).scrollTop(), //取窗口滚动条高度
          scrollHeight = jQuery(document).height(), //取窗口可视范围的高度
          windowHeight = jQuery(this).height(); //取文档内容实际高度

        //触发其他实例事件
        if ((scrollTop + windowHeight >= scrollHeight - 50) && !self.loading) {
          //父传子方法,广播事件传递 vm.$broadcast
          self.$broadcast('scrollToBottom',self);
          //派遣事件到父组件
          self.$dispatch('scrollToBottom',self);
          //触发它上面的自定义事件
          self.$emit('emitFun');

          self.loading = true;
        }
      });
    }
  }
</script>
