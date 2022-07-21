//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
    mode:'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    //独享路由守卫
                    beforeEnter: (to, from, next) => {
                        if (localStorage.getItem('school') === 'ycgxy') {
                            next()
                        }
                        else {
                            alert('学校名不对，无权限')
                        }
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            //props的第一种写法,值为对象
                            //props:{a:1,b:'hello'}
                            //props的第二种写法,值为布尔值,params专用
                            //props:true
                            //props的第三种写法，值为函数
                            props($route) {
                                return { id: $route.params.id, title: $route.params.title }
                            },
                            meta: { title: '详情' },
                        },
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫---每次路由切换之前，初始化时被调用
router.beforeEach((to, from, next) => {
    //console.log(to,from)
    if (to.meta.isAuth) { //判断时候需要鉴权
        if (localStorage.getItem('school') === 'ycgxy') {
            next()
        }
        else {
            alert('学校名不对，无权限')
        }
    }
    else {
        next()
    }
})

//全局后置路由守卫---每次路由切换之后，初始化时被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || '硅谷系统'
})

export default router