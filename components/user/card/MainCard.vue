<template>
  <div class="mt-3">
      <b-row align-v="center" class="justify-content-md-center">
        <b-col lg="12" >
            <b-card no-body class="overflow-hidden">
              <b-row no-gutters class="mt-3 mb-3">
                  <b-col md="5" align-self="center" align-h="center">
                      <b-col class="mx-auto" style="width: 200px;">
                          <b-img 
                            v-if="!config.isLoading" 
                            mx-auto 
                            thumbnail 
                            fluid 
                            :src="playersDetails.avatarfull" 
                            alt="Image 1">
                          </b-img>
                          <b-spinner 
                            v-else-if="config.isLoading" 
                            variant="primary">
                          </b-spinner>
                      </b-col>
                  </b-col>
                  <b-col md="5">
                    <b-row align-v="center" class="justify-content-md-center mt-3">
                      <h2>{{ playersDetails.personaname }}</h2>
                      <hr/>
                      <h6>{{ playersDetails.realname }}</h6>
                    </b-row>
                    <b-row align-v="center" class="justify-content-md-center mt-4">
                        <div class="text-center">                 
                          <b-button disabled variant="primary" >Steam ID: {{ playersDetails.steamid }}</b-button>
                          <b-button @click="reloadInformation()" variant="primary" class="material-icons" >refresh</b-button>
                        </div>
                    </b-row>
                  </b-col>
              </b-row>
            </b-card>
        </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
  props: {
    steamID: {
      required: true,
    }
  },
  data() {
    return {
      config: {
        isLoading: true,
      },
      playersDetails: {
        steamid: "0000000000000000",
        avatarfull: "",
        personaname: "Player Name",
        realname: "Player Name",
        profileurl: "",
      },
    };
  },
  methods: {
    getPlayersInfo() {
      this.$axios.$get(`/players?steam_id=` + this.steamID)
        .then((response) => {
          if(response.status)
          {
            this.playersDetails = response.player_details;            
          }
        }
      ).finally(() => {
        this.config.isLoading = false;
      });
    },
    reloadInformation(){
      this.getPlayersInfo();
      this.$emit('reload');
    },
  },
  created() {
    this.getPlayersInfo();
  },
};
</script>