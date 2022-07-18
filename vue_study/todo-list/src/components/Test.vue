<template>
    <div class="container">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="animate__animated animate__bounce" appear
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp">
            <h2 v-show="isShow" key="1">Hello World!</h2>
            <h2 v-show="!isShow" key="2">wp!</h2>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'

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
.container{
    margin-top: 20px;
}
h2 {
    background-color: aqua;
}
</style>