<template>
    <!-- <div>
        <span>{{language}}</span>
        <hello-world/>
    </div> -->

    <!-- </template> -->
    <!--   <script>
    import HelloWorld from './components/HelloWorld';
    
    export default {
        name: "father",
        components: {
        HelloWorld
    },
    data(){
        return {
            language:'chinese'
        }
    }
    } 
    </script>-->

    <!-- <template> -->
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add Todo</button>
    </form>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
</template>
<script>
// 给每个 todo 对象一个唯一的 id
let id = 0

export default {
    data() {
        return {
            newTodo: '',
            todos: [
                {id: id++, text: 'Learn HTML'},     //为什么id++
                {id: id++, text: 'Learn JavaScript'},
                {id: id++, text: 'Learn Vue'}
            ]
        }
    },
    methods: {
        addTodo() {
            this.todos.push({id: id++, text: this.newTodo}) //push 推一个对象过去
            this.newTodo = ''
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((t) => t !== todo)  //这个todo 是什么？
        }
    }
}
</script>

