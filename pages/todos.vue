<template>
  <b-container>
    <br/>
    <h2>To-do List</h2>
    <hr>
    <div>
      <b-dropdown split text="Choose a Game" variant="primary" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
      </b-dropdown>
    </div>
    <br/>
    <todo-table />
  </b-container>
</template>

<script>
import TodoTable from '../components/todo/TodoTable.vue'

export default {
  components: { TodoTable },
    name: 'Games',
    data() {
        return {
        }
    }
}
</script>