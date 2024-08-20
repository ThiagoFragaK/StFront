<template>
    <div>
        <b-table 
            hover 
            striped 
            outlined
            :fields="table.columns"
            :items="table.items"
        >
            <template #cell(action)="data">
                <b-button
                    size="sm"
                    variant="primary" 
                    class="material-icons"
                >
                    add
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
let tableColumns = [
  { key: "game", label: "Name", class: "text-center" },
  { key: "percentage", label: "Porcentagem", class: "text-center" },
  { key: "quantity", label: "N° achievements", class: "text-center" },
  { key: "action", label: "", class: "text-center" },
];

export default {
    props: {
    },
    data() {
        return {
            config: {
                page: 1,
                isLoading: true,
            },
            table: {
                columns: tableColumns,
                items: [
                    { game: "Age of Mythology", percentage: "100%", quantity: 70 },
                    { game: "Age of Empires II DE", percentage: "49%", quantity: 139 },
                    { game: "Age of Empires III DE", percentage: "100%", quantity: 88 },
                    { game: "Age of Empires IV", percentage: "24%", quantity: 14 },
                ]
            },
        };
    },
    methods: {
        getAchievements(page = this.config.page) {
            this.config.isLoading = true;
            this.config.page = page;
            console.log([
                this.steamID, page
            ])
            this.$axios.$get(`games/achievements?steam_id=${this.steamID}&page=${page}`)
                .then((response) => {
                    console.log(response)
                }).finally(() => {
                    this.config.isLoading = false;
                });
        },
    },
    computed: {
        steamID() {
            return this.$store.state.auth.steamID;
        },
    },
    created() {
        this.getAchievements();
    },
};
</script>