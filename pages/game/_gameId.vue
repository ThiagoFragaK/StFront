<template>
  <b-container>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-row align-v="center" class="justify-content-md-center mt-3">
        
        <b-col lg="12">
          <game-info />
        </b-col>

        <b-col lg="12">
          <br/>
        </b-col>

        <b-col lg="12" >
          <achievements />
        </b-col>

      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import Achievements from '../../components/game/Achievements.vue';
import GameInfo from '../../components/game/GameInfo.vue';

let tableColumns = [
	{ key: "image", label: "", class: "text-center" },
	{ key: "gameName", label: "Name", class: "text-center" },
	{ key: "playTime", label: "Name", class: "text-center" },
  { key: "gameId", label: "", class: "text-center col-1" }
];

export default {
    components: { Achievements, GameInfo },
    name: "MyGamesPage",
    data(){
        return {
          gameId: this.$route.params.gameId
        };
    },
    created() {
    },
    methods: {
    }
};
</script>