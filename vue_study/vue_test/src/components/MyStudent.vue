<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>{{msg}}</h2>
    <h2 @click="showName">学生名称：{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="bind">自定义事件</button>
    <button @click="unbind">点我解除自定义事件</button>
  </div>
</template>

<script>
import {mixin} from '../mixin'
//组件交互相关的代码（数据、方法等等）
export default {
  name: "MyStudent",
  data() {
    return {
      msg:'我是一个尚硅谷的学生'
    };
  },
  props:{
    name:{
      type : String,
      default : ''
    },
    sex:{
      type : String,
      required : true //sex是必要的
    },
    age : {
      type : Number,
      default : 0
    }
  },
  methods:{
    bind(){
      this.$emit('sendInfo',this.name,555)
    },
    unbind(){
      //解绑一个自定义事件
      this.$off('sendInfo')
      //解绑多个自定义事件
      //this.$off(['sendInfo',''])
      //解绑所有
      //this.$off()
    }
  },
  mixins:[mixin]
};
</script>

<style scoped>
/* 组件的样式 */
.demo {
  background: pink;
}
</style>
