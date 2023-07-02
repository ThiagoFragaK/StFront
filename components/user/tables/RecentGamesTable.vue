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
                :items="recentGames"
            >
                <template #cell(image)="data">            
                    <b-avatar 
                        variant="dark" 
                        :src= "getImage(data.item)"
                    ></b-avatar>
                </template>
                <template #cell(name)="data">
                    {{data.item.name}}
                </template>
                <template #cell(hours)="data">
                    {{data.item.playTimeWeeks}} hrs
                </template>
                <template #cell(achievements)="data">
                    {{ getAchievements(data.item) }}
                </template>
                <template #cell(progression)="data">
                    <b-progress 
                        show-progress
                        height="5px"
                        :value="data.item.achievements.unlocked" 
                        :max="data.item.achievements.total"
                        class="mt-2"
                    ></b-progress>
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
    { key: "image", label: "", class: "text-center col-1" },
    { key: "name", label: "Name", class: "text-center" },
    { key: "hours", label: "Played in 2 weeks", class: "text-center" },
    { key: "achievements", label: "Achievements", class: "text-center col-2" },
    { key: "progression", label: "Progression", class: "text-center col-2" },
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
            recentGames: [],
            config: {
                isLoading: true,
                page: 1,
                lastPage: 2,
            },
        };
    },
    methods: {
        getRecentGames(page = this.config.page) {
            this.config.isLoading = true;
            this.config.page = page;
            
            this.$axios.$get(`games/recent_games?steam_id=${this.steamID}&page=${page}`)
                .then((response) => {
                    console.log(response)
                    if(response.status){
                        this.recentGames = response.recent_games.data;
                        this.config.lastPage = response.recent_games.last_page;
                    }
                }
                ).finally(() => {
                    this.config.isLoading = false;
                });
        },
        getImage(data){
            return `http://media.steampowered.com/steamcommunity/public/images/apps/${data.appid}/${data.image}.jpg`;
        },
        isDisabled(item){
            return item.achievements.length <= 0;
        },
        getAchievements(item){
            var achievements = item.achievements;

            if(achievements.length <= 0) return "-";
            return achievements.unlocked + " of " + achievements.total;
        },
    },
    created() {
        this.getRecentGames();
    },
}
</script>