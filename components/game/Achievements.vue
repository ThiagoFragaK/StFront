<template>
  <b-container>
    <b-row v-if="loaded" align-v="center" class="justify-content-md-center mt-3">
      <div>
          <b-table striped hover :items="items"></b-table>
      </div> 
    </b-row>
    <b-row v-else-if="!loaded" align-v="center" class="justify-content-md-center mt-3">
      <b-spinner variant="primary"></b-spinner>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: "Achievements Page",
  props:{
    id: {
      type: String,
    },
  },
  data() {
    return {
      loaded: false,
      achievementInfo: [],
      items: [
          { age: 40, first_name: 'Dickerson', last_name: 'MacCann' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var gameId = this.id;
      this.$axios.$get(`v2/achievements/user/${gameId}`)
        .then((response) => {
          this.achievementInfo = response;
          this.loaded = true;
          console.log(response)
      });
    },
  },
};
</script>