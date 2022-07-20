//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
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
                            }
                        },
                    ]
                }
            ]
        }
    ]
})