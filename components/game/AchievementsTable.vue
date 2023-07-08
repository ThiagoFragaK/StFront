<template>
    <b-container>
    <b-row
        align-v="center"
        class="justify-content-md-center mt-3"
    >
        <div>
            <b-table 
                striped 
                hover
                outlined
                :busy="config.isLoading" 
                :fields="tableColumns" 
                :items="achievements"
            >
                <template #cell(icon)="data">
                    <b-avatar 
                        rounded 
                        variant="dark" 
                        :src="data.item.icon"
                    >
                    </b-avatar>
                </template>
                <template #cell(name)="data">
                    {{ data.item.name }}
                </template>
                <template #cell(description)="data">
                    {{ data.item.description }}
                </template>
                <template #cell(unlocked)="data">
                    {{ data.item.unlocked }}
                </template>
                <template #table-busy>
                    <div class="text-center text-danger my-2">
                        <b-spinner class="align-middle" variant="primary"></b-spinner>
                        <strong class="text-primary"> Fetching data from Steam API.. </strong>
                    </div>
                </template>
            </b-table>
            <div v-if="showPaginatior">
                <b-pagination
                    first-number
                    last-number
                    align="fill"
                    v-model="config.page"
                    aria-controls="gamesTable"
                    :total-rows="config.pagesTotal"
                    :per-page="config.perPage"
                    @change="getAchievements($event)"
                ></b-pagination>
            </div>
        </div>
    </b-row>
    </b-container>
</template>

<script>
let tableColumns = [
  { key: "icon", label: "", class: "text-center" },
  { key: "name", label: "Name", class: "text-center" },
  { key: "description", label: "Description", class: "text-center" },
  { key: "unlocked", label: "Unlock Date", class: "text-center" },
];

export default {
    props: {
        gameid: {
            type: String,
        },
    },
    data() {
        return {
            tableColumns,
            achievements: [],
            config: {
                isLoading: true,
                page: 1,
                perPage: 1,
                pagesTotal: 1,
            },
        };
    },
    methods: {
        getAchievements(page = this.config.page) {
            this.config.isLoading = true;
            this.config.page = page;

            this.$axios.$get(`games/stats?game_id=${this.gameid}&steam_id=${this.steamID}&page=${page}`)
                .then((response) => {
                    this.achievements = response.stats.data;
                    this.config.perPage = response.stats.per_page;
                    this.config.pagesTotal = response.stats.total_count;
                }).finally(() => {
                    this.config.isLoading = false;
                });
        },
    },
    computed: {
        steamID() {
            return this.$store.state.auth.steamID;
        },
        showPaginatior() {
            return this.config.pagesTotal > 1;
        },
    },
    created() {
        this.getAchievements();
    },
};
</script>