export default {
    namespaced : true,
    
    //actions---用于响应组件中的动作
    actions: {
        jiaOdd(context, value) {
            console.log('actions中的jiaOdd被调用了', context, value)
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            console.log('actions中的jiaWait被调用了', context, value)
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }
    },

//mutations---用于操作数据（state）
 mutations: {
        JIA(state, value) {
            console.log('mutations中的JIA被调用了', state, value)
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutations中的JIAN被调用了', state, value)
            state.sum -= value
        }
    },

//准备getters---用于加工state
getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },

//state---用于存储数据
state: {
        sum: 0,
        school: '清华大学',
        subject: '前端'
    }
}