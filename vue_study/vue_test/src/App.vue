<template>
    <div>
        <h1 style="color:red">01_ref属性</h1>
        <h2 v-text="msg" ref="title"></h2>
        <MySchool ref="school"></MySchool>
        <button @click="showDom">点我输出上方dom元素</button>
        <hr>
        <h1 style="color:red">02_props配置</h1>
        <MyStudent :name="'张三'" :age="18" :sex="'男'"></MyStudent>
        <hr>
        <h1 style="color:red">03_mixin混入</h1>
        <MySchool ref="school"></MySchool>
        <MyStudent :name="'张三'" :age="18" :sex="'男'"></MyStudent>
        <hr>
        <h1 style="color:red">04_scoped样式</h1>
        <MySchool></MySchool>
    </div>
</template>

<script>
//引入组件
import MySchool from './components/MySchool.vue'
import MyStudent from './components/MyStudent.vue'

export default {
    name:'App',
    components:{
        MySchool,
        MyStudent
    },
    data() {
        return {
            msg:'欢迎学习vue'
        }
    },
    methods: {
        showDom(){
           console.log(this.$refs.title); 
           console.log(this.$refs.school);
        }
    },
};
</script>

<style>
</style>