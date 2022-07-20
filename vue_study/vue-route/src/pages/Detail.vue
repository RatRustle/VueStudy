<template>
    <ul>
        <!-- query -->
        <!-- <li>编号：{{$route.query.id}}</li>
        <li>标题：{{$route.query.title}}</li> -->
        <!-- params -->
        <!-- <li>编号：{{ $route.params.id }}</li>
        <li>标题：{{ $route.params.title }}</li> -->
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    props: ['id', 'title'],
    mounted() {

    },
    computed: {

    }
}
</script>

<style>
</style>