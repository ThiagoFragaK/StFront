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
                                  <b-button-group>
                                    <b-button variant="success" disabled>Average: 91%</b-button>
                                    <b-button variant="primary" disabled>Total: 4600</b-button>
                                    <b-button variant="primary" disabled>Perfect: 81</b-button>
                                    <b-button v-b-toggle.moreInfo variant="primary">More Info</b-button>
                                  </b-button-group>
                              </b-card-body>                                     
                            </div>
                        </b-row>
                        </b-col>
                        <b-col md="4">
                            <b-row align-v="center" class="justify-content-md-center mt-3">
                                <div class="text-center">
                                <b-card-body class="mr-2">
                                  Steam ID: {{ userInfo.steamid }}
                                  <b-button :href="userInfo.profileurl" variant="outline-primary" >Steam Profile</b-button>
                                </b-card-body>                  
                                </div>
                            </b-row>
                        </b-col>
                    </b-row>
                  </b-card>
                  <b-collapse id="moreInfo" class="mt-2">
                    <b-card no-body>
                      <b-tabs card>
                        <b-tab title="Percentages" active>
                          <b-card align="left">
                            Average: <b-button disabled pill size="sm" variant="success">91%</b-button>
                            /
                            Achievements Unlocked, from total: <b-button disabled pill size="sm" variant="success">74%</b-button>
                          </b-card>
                        </b-tab>
                        <b-tab title="Games">
                          <b-card align="left">
                            Total: <b-button disabled pill size="sm" variant="success">100</b-button>
                            /
                            Perfect: <b-button disabled pill size="sm" variant="success">81</b-button>
                            /
                            Below 100%: <b-button disabled pill size="sm" variant="success">19</b-button>
                          </b-card>
                        </b-tab>
                        <b-tab title="Percentage Distribution">
                          Above 80%: <b-button disabled pill size="sm" variant="success">11</b-button>
                          /
                          Above 50%: <b-button disabled pill size="sm" variant="success">6</b-button>
                          /
                          Above 30%: <b-button disabled pill size="sm" variant="success">0</b-button>
                          /
                          Below 10%: <b-button disabled pill size="sm" variant="success">2</b-button>
                        </b-tab>
                        <b-tab title="Absolute Numbers">
                          <b-card align="left">
                            Total of Achievements: <b-button disabled pill size="sm" variant="success">6890</b-button>
                            /
                            Unlocked: <b-button disabled pill size="sm" variant="success">4600</b-button>
                            /
                            Locked: <b-button disabled pill size="sm" variant="success">2290</b-button>
                            /
                            Percentage: <b-button disabled pill size="sm" variant="success">66,7%</b-button>
                            /
                            Percentage of Locked: <b-button disabled pill size="sm" variant="success">33,2%</b-button>
                          </b-card>
                        </b-tab>
                      </b-tabs>
                    </b-card>
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