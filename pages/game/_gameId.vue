<template>
    <b-container>
        <b-row align-v="center" class="justify-content-md-center mt-3">
            <b-row align-v="center" class="justify-content-md-center mt-3">        
                <b-col lg="12" class="mt-3 mb-3">
                    <game-info-card 
                        @reload="reload()" 
                        :gameid= "gameID"
                    />
                </b-col>
                <b-col lg="12">
                    <achievements-table 
                        :gameid= "gameID" 
                        ref="AchievementsTable"
                    />
                </b-col>
            </b-row>
        </b-row>
    </b-container>
</template>

<script>
import AchievementsTable from '../../components/game/AchievementsTable.vue';
import GameInfoCard from '../../components/game/GameInfoCard.vue';

export default {
    middleware: ['auth_steam'],
    components: { 
        AchievementsTable, 
        GameInfoCard 
    },
    data(){
        return {
            gameID: this.$route.params.gameId
        };
    },
    methods: {
        reload(){
            this.$refs.AchievementsTable.getAchievements()
        }
    },
};
</script>