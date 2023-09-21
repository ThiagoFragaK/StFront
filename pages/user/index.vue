<template>
    <b-container>
        <b-row align-v="center" class="justify-content-md-center mt-3">
            <b-col lg="12">
                <main-card :steamID="steamID" @reload="reloadTable()" />
            </b-col>
        </b-row>
        <b-tabs align="center" content-class="mt-3" class="mt-4">
            <b-tab title="Calculator" @click="loadGamesTable()">
                <b-row align-v="center" class="justify-content-md-center mt-3">
                    <calculator-card ref="CalculatorCard"/>
                </b-row>
            </b-tab>
            <b-tab title="Recent games" active @click="setRecentGamesTable()">
                <b-row align-v="center" class="justify-content-md-center mt-3">
                    <recent-games-table :steamID="steamID" ref="RecentGamesTable" />
                </b-row>
            </b-tab>
            <b-tab title="My games" @click="loadGamesTable()">
                <b-row align-v="center" class="justify-content-md-center mt-3">
                    <players-games-table :steamID="steamID" ref="PlayersGamesTable"/>
                </b-row>
            </b-tab>            
        </b-tabs>
    </b-container>
</template>

<script>
import MainCard from '../../components/user/card/MainCard.vue';
import RecentGamesTable from '../../components/user/tables/RecentGamesTable.vue';
import PlayersGamesTable from '../../components/user/tables/PlayersGamesTable.vue';
import CalculatorCard from '../../components/calculator/CalculatorCard.vue';

export default {
    middleware: ['auth_steam'],
    components: {
        PlayersGamesTable,
        RecentGamesTable,
        CalculatorCard,
        MainCard, 
    },
    data() {
        return {
            isRecentGames: true,
        };
    },
    methods: {
        reloadTable() {
            if(this.isRecentGames) {
                this.$refs.RecentGamesTable.getRecentGames();
            } else {
                this.$refs.PlayersGamesTable.getGames();
            }
        },
        loadGamesTable() {
            this.isRecentGames = false;
            this.$refs.PlayersGamesTable.getGames();
        },
        setRecentGamesTable() {
            this.isRecentGames = true;
        },
    },
    computed: {
        steamID() {
            return this.$store.state.auth.steamID;
        },
    },
}
</script>