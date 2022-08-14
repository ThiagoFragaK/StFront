<template>
  <b-container>
        <div>
            <b-row align-v="center" v-if="loaded" class="justify-content-md-center mt-3">
              <b-col lg="12" >
                  <b-card no-body class="overflow-hidden" style="max-height: 250px">
                    <b-row no-gutters >
                        <b-col md="3" align-self="center" align-h="center">
                            <b-col class="mx-auto" style="width: 200px;">
                                <b-img mx-auto thumbnail fluid :src="userInfo.avatarfull" alt="Image 1"></b-img>
                            </b-col>
                        </b-col>
                        <b-col md="5">
                          <b-row align-v="center" class="justify-content-md-center mt-3">
                              <div class="text-center">
                                <b-card-body>
                                    <h1>{{ userInfo.personaname }}</h1>
                                    <hr/>
                                    <b-card-text>{{ userInfo.realname }}</b-card-text>
                                    <div>
                                      <b-row>
                                        <b-col cols="4">
                                          <h5>Percentage of Completion:</h5>
                                        </b-col>
                                        <b-col cols="8">
                                          <b-progress value="81" max="106" show-progress class="mt-3"></b-progress>
                                        </b-col>
                                      </b-row>
                                    </div>
                                </b-card-body>                                     
                              </div>
                          </b-row>
                        </b-col>
                        <b-col md="4">
                            <b-row align-v="center" class="justify-content-md-center mt-3">
                                <div class="text-center">
                                  <b-card-body class="mr-2">
                                    <b-alert variant="primary" show>Steam ID: {{ userInfo.steamid }}</b-alert>
                                  </b-card-body>                  
                                  <b-button variant="primary" >Update Data</b-button>
                                  <b-button v-b-toggle.moreInfo variant="primary">More Info</b-button>
                                </div>
                            </b-row>
                            <br/>
                        </b-col>
                    </b-row>
                  </b-card>
                  <b-collapse id="moreInfo" class="mt-2">
                    <br/>
                    <b-card-group deck>
                      <b-card header="Achievements" align="center">                    
                        <b-row>
                          <b-col cols="7">
                            <h6 class="mt-2">Average of Achievements:</h6>
                          </b-col>
                          <b-col cols="3">
                            <b-button disabled size="sm" variant="primary"> 91% </b-button>                            
                          </b-col>
                        </b-row>
                        <hr/>
                        <b-row>
                          <b-col cols="4">
                            <h6>Percentage Distribution:</h6>
                          </b-col>
                          <b-col cols="8">
                            <b-progress show-progress class="mt-2" v-b-tooltip.hover id="tooltip-percentage-distribution">
                              <b-progress-bar variant="danger" :value="value[2]"></b-progress-bar>
                              <b-progress-bar variant="primary" :value="value[1]"></b-progress-bar>
                              <b-progress-bar variant="success" :value="value[0]"></b-progress-bar>
                            </b-progress>
                            <b-tooltip target="tooltip-percentage-distribution" triggers="hover">
                              <b-badge pill variant="danger">Below 50%</b-badge>
                              <b-badge pill variant="primary">Above 50%</b-badge>
                              <b-badge pill variant="success">100%</b-badge>
                            </b-tooltip>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col cols="4">
                            <h6>Percentages from total:</h6>
                          </b-col>
                          <b-col cols="8">
                            <b-progress max="106" show-progress class="mt-2" v-b-tooltip.hover id="tooltip-percentage-distribution">
                              <b-progress-bar variant="danger" :value="value[2]"></b-progress-bar>
                              <b-progress-bar variant="primary" :value="value[1]"></b-progress-bar>
                              <b-progress-bar variant="success" :value="value[0]"></b-progress-bar>
                            </b-progress>
                            <b-tooltip target="tooltip-percentage-distribution" triggers="hover">
                              <b-badge pill variant="danger">Below 50%</b-badge>
                              <b-badge pill variant="primary">Above 50%</b-badge>
                              <b-badge pill variant="success">100%</b-badge>
                            </b-tooltip>
                          </b-col>
                        </b-row>
                      </b-card>

                      <b-card header="Games" align="center">
                        <b-card-text>Thrid Card</b-card-text>
                      </b-card>

                      <b-card header="Percentages" align="center">
                        
                      </b-card>
                    </b-card-group>
                  </b-collapse> 
              </b-col>
            </b-row>
            <b-row align-v="center" v-else-if="!loaded" class="justify-content-md-center mb-5 m-5 d-flex">
                <b-spinner variant="primary"></b-spinner>
            </b-row>
        </div>
  </b-container>
</template>

<script>
export default {
  name: "UserPage",
  data() {
    return {
        loaded: false,
        value: [81, 19, 6],
        achievementsInfo: {
          
        },
        gamesInfo: {
          
        },
        percentagesInfo: {
          
        },
        userInfo: {
            avatarfull: null,
            personaname: null,
            realname: null,
            profileurl: null,
        },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.$get("steam/user").then((response) => {
        this.userInfo = response;
        this.loaded = true;
      });
    },
  },
};
</script>