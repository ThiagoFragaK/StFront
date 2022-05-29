<template>
  <b-container>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-row align-v="center" class="justify-content-md-center mt-3">
        
        <b-col lg="12">
          <game-info :id= "gameId"/>
        </b-col>

        <b-col lg="12">
          <br/>
        </b-col>

        <b-col lg="12" >
          <achievements :id= "gameId"/>
        </b-col>

      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import Achievements from '../../components/game/Achievements.vue';
import GameInfo from '../../components/game/GameInfo.vue';

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