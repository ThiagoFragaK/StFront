<template>
  <b-container>
    <b-row v-if="loaded" align-v="center" class="justify-content-md-center mt-3">
      <div>
      <b-card >        
        <template #header>
          <b-row align-v="center" class="justify-content-md-center mt-3">
            <b-col lg="4">
              <div>
                <b-img :src="gameInfo.general.image" fluid alt="Fluid image"></b-img>
              </div>
            </b-col>
            <b-col lg="8">
              <h3>{{ gameInfo.general.name }}</h3>
            </b-col>
          </b-row>
        </template>
        <b-card-text>
          <b-row>
            <h5>Global Achievements Statistics</h5>
            <b-col>Above 70%: {{ gameInfo.globalInfo.quantity.aboveSevety }} ( {{ gameInfo.globalInfo.percentages.aboveSevety }} % )</b-col>
            <b-col>Above 51%: {{ gameInfo.globalInfo.quantity.aboveFiftyOne }} ( {{ gameInfo.globalInfo.percentages.aboveFiftyOne }} % )</b-col>
            <b-col>Below 10%: {{ gameInfo.globalInfo.quantity.belowTen }} ( {{ gameInfo.globalInfo.percentages.belowTen }} % )</b-col>
            <b-col>Below 2%: {{ gameInfo.globalInfo.quantity.belowTwo }} ( {{ gameInfo.globalInfo.percentages.belowTwo }} % )</b-col>
          </b-row>
          <hr/>
          <b-row>
            <h5>User Achievements Statistics</h5>
            <b-col>Total of Achievements: {{ gameInfo.userAchievements.total }} </b-col>
            <b-col>Unlocked Achievements: {{ gameInfo.userAchievements.unlocked }} </b-col>
            <b-col>Locked of Achievements: {{ gameInfo.userAchievements.locked }} </b-col>
            <b-col><h6>Percentage: {{ gameInfo.userAchievements.percentage }} %</h6></b-col>
          </b-row>
        </b-card-text>
      </b-card>
      </div>
    </b-row>
    <b-row v-else-if="!loaded" align-v="center" class="justify-content-md-center mt-3">
      <b-spinner variant="primary"></b-spinner>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props:{
    id: {
      type: String,
    },
  },
  data() {
    return {
      loaded: false,
      gameInfo: [
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var gameId = this.id;
      this.$axios.$get(`steam/games/info/${gameId}`)
        .then((response) => {
          this.gameInfo = response;
          this.loaded = true;
      });
    },
  },
};
</script>