export default {
    namespaced : true,

    //actions---用于响应组件中的动作
    actions: {
       
    },

//mutations---用于操作数据（state）
 mutations: {
        addPerson(state, value) {
            console.log('mutations中的addPerson被调用了', state, value)
            state.personList.unshift(value)
        }
    },

//准备getters---用于加工state
getters: {
       
    },

//state---用于存储数据
state: {
        personList: [
            { id: '001', name: '张三' },
            { id: '002', name: '李四' }
        ]
    }
}