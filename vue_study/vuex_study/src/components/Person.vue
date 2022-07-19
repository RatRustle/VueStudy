<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件求和为:{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ol>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ol>
  </div>
</template>

<script>
import { mapMutations, mapState} from 'vuex'
import { nanoid } from 'nanoid'
export default {
    name : 'Person',
    data() {
        return {
            name : ''
        }
    },
    methods: {
        ...mapMutations('Person',['addPerson']),
        add(){
            const person = { id : nanoid(),name : this.name}
            this.addPerson(person)
            this.name = ''
        }
    },
    computed : {
        ...mapState('Person',['personList']),
        ...mapState('Count',['sum'])
    }
}
</script>

<style>

</style>