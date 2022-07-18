<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'
import { response } from 'express'

export default {
    name:'TestAxios',
    data() {
        return {
            
        }
    },
    methods:{
        getStudents(){
            axios.get('http://localhost:8080/api/student'.then(
                response =>{
                    console.log('请求成功了',response.data)
                },
                error =>{
                    console.log('请求失败了',error.message)
                }
            ))
        }
    }
}
</script>

<style>

</style>