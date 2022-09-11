<template>
  <div>
      <b-row align-v="center" v-if="loaded" class="justify-content-md-center">
        <b-col lg="12" >
            <b-card no-body class="overflow-hidden">
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
                              <h1 class="font-weight-bold">{{ userInfo.personaname }}</h1>
                              <hr/>
                              <div>
                                <b-row align-v="center" class="justify-content-md-center mt-3">
                                  <b-card-body >
                                    <b-alert variant="primary" show>
                                      <b-row>
                                        <b-col>
                                          <b-row >
                                            <b-col>
                                              <h5 class="font-weight-bold"> 168 </h5>
                                            </b-col>
                                            <b-col>
                                              <h6> Games </h6>
                                            </b-col>
                                          </b-row>
                                        </b-col>
                                        <b-col>
                                          <b-row >
                                            <b-col>
                                              <h5 class="font-weight-bold"> 4752 </h5>
                                            </b-col>
                                            <b-col>
                                              <h6> Achievements </h6>
                                            </b-col>
                                          </b-row>
                                        </b-col>
                                        <b-col>
                                          <b-row >
                                            <b-col>
                                              <h5 class="font-weight-bold"> 84 </h5>
                                            </b-col>
                                            <b-col cols="12">
                                              <h6> 100% Games </h6>
                                            </b-col>
                                          </b-row>
                                        </b-col>
                                        <b-col>
                                          <b-row >
                                            <b-col>
                                              <h5 class="font-weight-bold"> 91 % </h5>
                                            </b-col>
                                            <b-col>
                                              <h6> Average </h6>
                                            </b-col>
                                          </b-row>
                                        </b-col>
                                      </b-row>
                                    </b-alert>
                                  </b-card-body>
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
                          </div>
                      </b-row>
                      <br/>
                  </b-col>
              </b-row>
            </b-card>
            <br/>
            <b-card-group deck>
              <b-card header="Statistics" align="center">
                <b-row align-h="center">
                  <h6>Games Percentage Distribution:</h6>
                  <b-col cols="10">
                    <b-progress show-value :max="max">
                      <b-progress-bar variant="danger" :value="value[0]"></b-progress-bar>
                      <b-progress-bar variant="warning" :value="value[1]"></b-progress-bar>
                      <b-progress-bar variant="primary" :value="value[2]"></b-progress-bar>
                      <b-progress-bar variant="success" :value="value[3]"></b-progress-bar>
                    </b-progress>
                    <b-collapse id="gpd-info">
                      <hr/>
                      <b-badge pill size="sm" variant="danger"> -10% </b-badge>
                      <b-badge pill size="sm" variant="warning"> 10% - 50% </b-badge>
                      <b-badge pill size="sm" variant="primary"> 50% - 70% </b-badge>
                      <b-badge pill size="sm" variant="success"> +70% </b-badge>
                    </b-collapse>
                  </b-col>
                </b-row>
                <hr/>
                <b-row align-content="center">
                  <b-col>
                    <b-button>Statistics Page</b-button>
                    <b-button v-b-toggle.gpd-info class="shadow-none" variant="primary">^</b-button>
                  </b-col>
                </b-row>
              </b-card>

              <b-card header="Games" align="center"></b-card>
              <b-card header="Friends" align="center"></b-card>
            </b-card-group>
        </b-col>
      </b-row>
      <b-row align-v="center" v-else-if="!loaded" class="justify-content-md-center mb-5 m-5 d-flex">
          <b-spinner variant="primary"></b-spinner>
      </b-row>
  </div>
</template>

<script>
export default {
  name: "UserPage",
  data() {
    return {
        loaded: false,
        value: [0, 5, 3, 14],
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
  computed: {
    max(){
      let quantities = this.value
      let sum = 0

      for(let i = 0; i < quantities.length; i++){
        sum += quantities[i]
      }

      return sum;
    }
  }
};
</script>