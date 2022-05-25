<template>
  <b-container>
    <br/>
    <h2>To-do List</h2>
    <hr>
    <div col="4">
      <game-selector />
    </div>
    <br/>
    <todo-table />
  </b-container>
</template>

<script>
import GameSelector from '../components/todo/GameSelector.vue'
import TodoTable from '../components/todo/TodoTable.vue'

export default {
  components: { TodoTable, GameSelector },
    name: 'Games',
    data() {
        return {
          
        }
    }
}
</script>