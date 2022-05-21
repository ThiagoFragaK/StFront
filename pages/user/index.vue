<template>
  <b-container>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-col lg="12">
        <main-card />
      </b-col>
    </b-row>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <recent-games-card />
    </b-row>
  </b-container>
</template>

<script>
import MainCard from '../../components/user/MainCard.vue';
import RecentGamesCard from '../../components/user/RecentGamesCard.vue';

export default {
  components: { MainCard, RecentGamesCard },
  name: 'UserPage',
  data(){
    return {
    };
  },
  created() {
  },
  methods: {
    getData(){
     
    }
  }
}
</script>