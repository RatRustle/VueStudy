<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot name="image"></slot>
    <ul>
        <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul>
    <slot :test="testList"></slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['listData','title'],
    data() {
        return {
            testList:['张三','李四','王五']
        }
    },
}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}

h3{
    text-align: center;
    background-color: orange;
}
</style>