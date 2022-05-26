<template>
  <b-container>
    <b-row class="justify-content-md-left mt-3">
      <b-col lg="2" md="3">
        <b-form-select  
          @change='gameChange($event)'
          v-model="selected" 
          :options="gameList">
        </b-form-select>
      </b-col>
    </b-row>
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
  methods: {
    gameChange(selected)
    {
      this.$emit('changedGame', selected);
    }
  }
};
</script>