<template>
    <div>
        <h1>当前求和为:{{ sum }}</h1>
        <h3>当前求和放大10倍为:{{ bigSum }}</h3>
        <h3>我在{{ school }},学习{{ subject }}</h3>
        <h3>人员列表的总人数是:{{personList.length}}</h3>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'

export default {
    name: 'Count',
    data() {
        return {
            n: 1
        }
    },
    methods: {
        ...mapMutations('Count',['JIA','JIAN']),
        ...mapActions('Count',['jiaOdd','jiaWait']),
        increment() {
            this.JIA(this.n)
        },
        decrement() {
            this.JIAN(this.n)
        },
        incrementOdd() {
            this.jiaOdd(this.n)
        },
        incrementWait() {
            this.jiaWait(this.n)
        }
    },
    computed : {
        ...mapState('Count',['sum','school','subject']),
        ...mapState('Person',['personList']),
        ...mapGetters('Count',['bigSum'])
    }
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>