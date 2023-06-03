<template>
    <b-container>
      <b-row align-v="center" class="justify-content-md-center mt-3">
        <div>
          <b-table 
            striped 
            hover
            outlined
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
          isLoading: true
        },
      };
    },
    methods: {
      getGames(){
        this.config.isLoading = true;
        this.$axios.$get(`games/list?steam_id=` + this.steamID)
          .then((response) => {
            if(response.status){
              this.gamesList = response.games_list;
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
  }
  </script>