<template>
  <b-container>
    <b-row v-if="loaded" align-v="center" class="justify-content-md-center mt-3">
      <b-row align-v="center" class="justify-content-md-center mt-3">
        <b-col lg="6">
          <b-card :title="gamesCount.played" sub-title="Total Games">
            <b-card-text>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card :title="gamesCount.notPlayed" sub-title="Games not yet played">
            <b-card-text>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col lg="12">
          <br/>
        </b-col>
        
        <b-col lg="12" >
          <div>
            <b-table striped hover :fields="tableColumns" :items="tableItens">
              <template #cell(image)="data">
                <b-avatar 
                  variant="dark" 
                  :src= "getImage(data.item)">
                  </b-avatar>
              </template>
              <template #cell(gameName)="data">
                  {{data.item.gameName}}
              </template>
              <template #cell(playTime)="data">
                  {{data.item.playTime}} hrs
              </template>
              <template #cell(gameId)="data">
                <b-button 
                  @click="redirect(data.item.appid)"
                  size="sm"
                  variant="outline-primary">
                  Achievements
                </b-button>
              </template>
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-row>
    <b-row v-else-if="!loaded" align-v="center" class="justify-content-md-center mt-3">
      <b-spinner variant="primary"></b-spinner>
    </b-row>
  </b-container>
</template>

<script>

let tableColumns = [
	{ key: "image", label: "", class: "text-center" },
	{ key: "gameName", label: "Name", class: "text-center" },
	{ key: "playTime", label: "Name", class: "text-center" },
  { key: "gameId", label: "", class: "text-center col-1" }
];

export default {
  name: "MyGamesPage",
  data(){
    return {
      loaded: false,
      gamesCount: {
        played: null,
        notPlayed: null,
      },
      tableItens: {},
      tableColumns
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      this.$axios.$get('v1/games')
        .then((response) => {
          this.tableItens = response.data;
          this.gamesCount.notPlayed = response.notPlayedCount;
          this.gamesCount.played = response.playedCount;
          this.loaded = true;
          console.log(this.tableItens)
        }
      )
    },
    getImage(data){
      return `http://media.steampowered.com/steamcommunity/public/images/apps/${data.gameId}/${data.image}.jpg`;
    },
    redirect(appId){
      return;
    }
  }
};
</script>