<template>
	<h2>我是About的内容</h2>
</template>

<script>
export default {
	name: 'About',
	//通过路由规则，进入该组件时被调用
	beforeRouteEnter(to, from, next) {
		if (localStorage.getItem('school') === 'ycgxy') {
			next()
		}
		else {
			alert('学校名不对，无权限')
		}
	},
	//通过路由规则,离开组件时被调用
	beforeRouteLeave(to, from, next) {
		next()
	}
}
</script>