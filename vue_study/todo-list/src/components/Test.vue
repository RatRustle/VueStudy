<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition>
            <h2 v-show="isShow">你好啊</h2>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style scoped>
h2 {
    background-color: aqua;
}
</style>