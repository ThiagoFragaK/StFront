<template>
  <b-container>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-col lg="12">
        <main-card :steamID="steamID" @reload="reloadTable()" />
      </b-col>
    </b-row>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <recent-games-table :steamID="steamID" ref="RecentGamesTable" />
    </b-row>
  </b-container>
</template>

<script>
import MainCard from '../../components/user/MainCard.vue';
import RecentGamesTable from '../../components/user/RecentGamesTable.vue';

export default {
  middleware: ['auth_steam'],
  components: { 
    MainCard, 
    RecentGamesTable
  },
  methods: {
    reloadTable(){
      this.$refs.RecentGamesTable.getRecentGames();
    }
  },
  computed: {
    steamID() {
      return this.$store.state.auth.steamID;
    }
  },
}
</script>