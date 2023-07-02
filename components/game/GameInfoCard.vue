<template>
    <b-container>
    <b-row align-v="center" class="justify-content-md-center">
        <div>
        <b-card >        
            <template #header>
            <b-row 
                v-if="!config.isLoading"
                align-v="center" 
                class="justify-content-md-center mt-3 mb-3"
            >
                <b-col lg="5">
                <div>
                    <b-img :src="gameDetails.game_image" fluid alt="Fluid image"></b-img>
                </div>
                </b-col>
                <b-col lg="6">
                <b-row class="mb-3">
                    <b-col lg="10">
                    <h3>{{ gameDetails.game_name }}</h3>
                    </b-col>
                    <b-col lg="2">
                    <b-button @click="$emit('reload')" variant="primary" class="material-icons" >refresh</b-button>
                    </b-col>
                </b-row>
                <hr/>
                <b-row>
                    <h6>{{ gameDetails.publishers }}</h6>
                    <h6>{{ gameDetails.developers }}</h6>
                </b-row>
                </b-col>
            </b-row>
            <b-row 
                v-else-if="config.isLoading" 
                align-v="center" 
                class="justify-content-md-center mt-3"
            >
                <b-spinner 
                variant="primary">
                </b-spinner>
            </b-row>
            </template>
            <b-card-text>
            <b-row >
                <b-col align-h="center">
                <h5>Game hours</h5>
                <hr/>
                </b-col>
                <b-col align-h="center">
                <h5>User achievements stats</h5>
                <hr/>
                </b-col>
            </b-row>
            </b-card-text>
        </b-card>
        </div>
    </b-row>
    </b-container>
</template>

<script>
export default {
    props:{
        gameid: {
            type: String,
        },
    },
    data() {
        return {
            config: {
                isLoading: true,
            },
            gameDetails: {
                game_name: "Game name",
                game_image: "",
                developers: "Developers",
                publishers: "Publishers",
            },
        };
    },
    methods: {
        getGameDetails() {
            this.$axios.$get(`games/details?game_id=${this.gameid}`)
            .then((response) => {
                if(response.status) {
                    this.gameDetails = response.game_details
                }
            }).finally(() => {
                this.config.isLoading = false;
            });
        },
    },
    created() {
        this.getGameDetails();
    },
};
</script>