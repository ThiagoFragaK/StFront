<template>
  <b-container>
    <b-row v-if="loaded" align-v="center" class="justify-content-md-center mt-3">
      <div>
        <b-table striped hover :fields="tableColumns" :items="tableItens">
          <template #cell(image)="data">
               <b-avatar 
                variant="dark" 
                :src= "getImage(data.item)">
              </b-avatar>
          </template>
          <template #cell(name)="data">
              {{data.item.name}}
          </template>
          <template #cell(playTimeWeeks)="data">
              {{data.item.playTimeWeeks}} hrs
          </template>
          <template #cell(playTimeTotal)="data">
              {{data.item.playTimeTotal}} hrs
          </template>
          <template #cell(appid)="data">
             <b-button 
              @click="redirect(data.item.appid)"
              size="sm"
              variant="outline-primary"
              :to="`/game/${data.item.appid}`"
              >
              Achievements
            </b-button>
					</template>
        </b-table>
      </div>
    </b-row>
    <b-row v-else-if="!loaded" align-v="center" class="justify-content-md-center mt-3">
      <b-spinner variant="primary"></b-spinner>
    </b-row>
  </b-container>
</template>

<script>

let tableColumns = [
	{ key: "image", label: "", class: "text-center col-1" },
	{ key: "name", label: "Name", class: "text-center" },
	{ key: "playTimeWeeks", label: "Played in last 2 weeks", class: "text-center" },
	{ key: "playTimeTotal", label: "Total Playtime", class: "text-center" },
  { key: "appid", label: "", class: "text-center col-1" }
];

export default {
  name: 'UserPage',
  data(){
    return {
      loaded: false,
      tableItens: {},
      tableColumns
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      this.$axios.$get('v1/games/recentGames')
        .then((response) => {
          this.tableItens = response.games;
          this.loaded = true;
          console.log(this.tableItens)
        }
      )
    },
    getImage(data){
      return `http://media.steampowered.com/steamcommunity/public/images/apps/${data.appid}/${data.image}.jpg`;
    },
    redirect(appId){
      return;
    }
  }
}
</script>