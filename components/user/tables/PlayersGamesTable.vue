<template>
    <b-container>
        <b-row align-v="center" class="justify-content-md-center mt-3">
            <div>
                <b-table 
                    striped 
                    hover
                    outlined
                    id="gamesTable"
                    :busy="config.isLoading"
                    :fields="tableColumns" 
                    :items="gamesList"
                >
                    <template #cell(icon)="data">            
                        <b-avatar 
                            variant="dark" 
                            :src= "getImage(data.item)">
                        </b-avatar>
                    </template>
                    <template #cell(name)="data">
                        {{data.item.name}}
                    </template>         
                    <template #cell(playtime)="data">
                        {{ data.item.playtime === 0 ? '-' : data.item.playtime + ` hrs` }}
                    </template>         
                    <template #cell(not_played_since)="data">
                        {{ data.item.not_played_since === 0 ? '-' : data.item.not_played_since}}
                    </template>         
                    <template #cell(appid)="data">
                        <b-button
                            size="sm"
                            variant="primary"
                            class="material-icons"
                            :disabled="isDisabled(data.item)"
                            :to="`/game/${data.item.appid}`"
                        >
                            apps
                        </b-button>
                    </template>
                    <template #table-busy>
                        <div class="text-center text-danger my-2">
                        <b-spinner class="align-middle" variant="primary"></b-spinner>
                            <strong class="text-primary"> Fetching data from Steam API.. </strong>
                        </div>
                    </template>
                </b-table>

                <b-pagination
                    v-model="config.page"
                    aria-controls="gamesTable"
                    :total-rows="totalPages"
                    @change="getGames($event)"
                    @input="getGames($event)"
                ></b-pagination>
            </div>
        </b-row>
    </b-container>
  </template>
<script>

let tableColumns = [
    { key: "icon", label: "", class: "text-center col-1" },
    { key: "name", label: "Name", class: "text-center", sortable: true },
    { key: "playtime", label: "Hours played", class: "text-center", sortable: true },
    { key: "not_played_since", label: "Not played since", class: "text-center", sortable: true },
    { key: "appid", label: "", class: "text-center col-1" }
];
  
  export default {
    props:{
      steamID: {
        required: true,
      }
    },
    data(){
      return {
        tableColumns,
        gamesList: [],
        config: {
            isLoading: true,
            page: 1,
            pagesTotal: 50,
        },
      };
    },
    methods: {
        getGames(page = this.config.page){
            this.config.page = page;
            this.config.isLoading = true;

            this.$axios.$get(`games/list?steam_id=${this.steamID}&page=${page}`)
                .then((response) => {
                    console.log(response)
                    if(response.status) {
                        this.gamesList = response.games_list.data;
                        this.config.pagesTotal = response.games_list.last_page;
                    }
                }
            ).finally(() => {
                this.config.isLoading = false;
            });
        },
        getImage(item){
            return `http://media.steampowered.com/steamcommunity/public/images/apps/${item.appid}/${item.icon}.jpg`;
        },
        isDisabled(item){
            return !item.has_achievements;
        },
    },
    computed: {
        totalPages() {
            return this.config.pagesTotal;
        },
    },
  }
</script>