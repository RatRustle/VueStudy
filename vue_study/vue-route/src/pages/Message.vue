<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带query参数,to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->
                <!-- 跳转路由并携带query参数,to的对象写法 -->
                <!-- <router-link :to="{
                    name:'xiangqing',
                    //path:'/home/message/detail',
                    query:{
                        id : m.id,
                        title : m.title
                    }
                }">{{ m.title }}</router-link> -->
                <!-- 跳转路由并携带params参数,to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->
                <router-link :to="{
                    name: 'xiangqing',//必须使用name，不允许写path
                    //path:'/home/message/detail',
                    params: {
                        id: m.id,
                        title: m.title
                    }
                }">{{ m.title }}</router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            messageList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
            ]
        }
    },
    methods: {
        pushShow(m) {
            this.$router.push({
                name: 'xiangqing',
                params: {
                    id: m.id,
                    title: m.title
                }
            }).catch((err) => {

            })
        },
        replaceShow(m) {
            this.$router.replace({
                name: 'xiangqing',
                params: {
                    id: m.id,
                    title: m.title
                }
            }).catch((err) => {

            })
        }
    },
}
</script>