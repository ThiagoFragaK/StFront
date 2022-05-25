<template>
  <b-container>
    <div col="4">
      <b-form-select v-model="selected" :options="gameList"></b-form-select>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Games",
  data() {
    return {
      selected: 0,
      gameList: [
        { value: 0, text: "All" },
        { value: 1, text: "Age of Empires III" },
        { value: 2, text: "Shadow of the Tomb Raider" },
        { value: 3, text: "Northgard" },
      ],
    };
  },
};
</script>