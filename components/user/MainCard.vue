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
                            <b-button :href="userInfo.profileurl" variant="outline-primary" >Steam Profile</b-button>
                        </b-card-body>                  
                        </div>
                    </b-row>
                    </b-col>
                    <b-col md="4">
                        <b-row align-v="center" class="justify-content-md-center mt-3">
                            <div class="text-center">
                            <b-card-body class="mr-2">
                                <b-list-group >
                                    <b-list-group-item>Steam ID: {{ userInfo.steamid }} </b-list-group-item>
                                    <b-list-group-item>Info: Placeholder</b-list-group-item>
                                    <b-list-group-item>Info: Placeholder</b-list-group-item>
                                    <b-list-group-item>Info: Placeholder</b-list-group-item>
                                    <b-list-group-item>Info: Placeholder</b-list-group-item>
                                </b-list-group>
                            </b-card-body>                  
                            </div>
                        </b-row>
                    </b-col>
                </b-row>
                </b-card>
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
      this.$axios.$get("v1/user").then((response) => {
        this.userInfo = response;
        console.log(response)
        this.loaded = true;
      });
    },
  },
};
</script>