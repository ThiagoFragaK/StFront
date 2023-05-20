<template>
  <b-container>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-col lg="12">
        <main-card @reload="reloadTable()" />
      </b-col>
    </b-row>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <recent-games-table ref="RecentGamesTable" />
    </b-row>
  </b-container>
</template>

<script>
import MainCard from '../../components/user/MainCard.vue';
import RecentGamesTable from '../../components/user/RecentGamesTable.vue';

export default {
  components: { 
    MainCard, 
    RecentGamesTable
  },
  name: 'UserPage',
  data(){
    return {
    };
  },
  created() {
  },
  methods: {
    getData(){
     
    },
    reloadTable(){
      this.$refs.RecentGamesTable.getRecentGames();
    }
  }
}
</script>