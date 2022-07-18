<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
      </div>
    </div>
    <hr>
    <div>
      <TestSearch></TestSearch>
      <TestList></TestList>
    </div>
    <hr>
    <div class="category-container">
      <Category :title="'美食'" :listData="foods">
        <img slot="image"
          src="https://thirdwx.qlogo.cn/mmopen/vi_32/C1JtdNJ2lKPZBJaC10KoIRgunRI8GWBz1MbMSxEMW7jeLZhwApeubFjSRtLluCcJ7SuMsU1ic9WJO4NH8GBSWLA/132">
      </Category>
      <Category :title="'游戏'" :listData="games">
        <template scope="test">
          <ol>
            <li v-for="(item, index) in test.test" :key="index">{{ item }}</li>
          </ol>
        </template>
      </Category>
      <Category :title="'电影'" :listData="films"></Category>
    </div>
    <!-- 过度与动画 -->
    <!-- <Test></Test> -->
    <!-- 配置代理--方式1 -->
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter.vue'
import Test from './components/Test.vue'
import TestSearch from './components/TestSearch.vue'
import TestList from './components/TestList.vue'
import Category from './components/Category.vue'


export default {
  name: 'App',
  components: { MyHeader, MyList, MyFooter, Test, TestList, TestSearch, Category },
  data() {
    return {
      // 由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      //slot插槽
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['风花雪月', '塞尔达', '宝可梦', 'lol'],
      films: ['《大逃杀》', '《让子弹飞》', '《元神》', '《大话西游》']
    }
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    //修改一个todo
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.title = title
        }
      })
    },
    //删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    //全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
    this.$bus.$off('updateTodo')
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid #2941c4;
  margin-right: 5px;
}


.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.category-container {
  display: flex;
  justify-content: space-around;
}
</style>
