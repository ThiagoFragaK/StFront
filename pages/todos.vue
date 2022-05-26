<template>
  <b-container>
    <br/>
    <h2>To-do List</h2>
    <hr>
    <div col="4">
      <game-selector @changedGame="gameSelected" />
    </div>
    <br/>
    <todo-table :gameId="gameId" :key="gameId" />
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
      gameId: 0
    }
  },
  methods: {
    gameSelected(id){
      console.log(id);
    }
  }
}
</script>