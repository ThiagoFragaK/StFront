<template>
  <b-container fluid="lg">
    <b-row class="justify-content-md-center mt-4 mb-4">
      <b-card-group 
        deck 
        class="mb-3"
      >
        <b-card 
          border-variant="primary" 
          header="Visitor" 
          class="text-center"
        >
          <b-card-text>
            <div class="form-group mt-2">
              <label class="form-label mt-4">Your SteamID</label>
              <input 
                v-model="visitorID"
                type="email" 
                id="steam_id" 
                class="form-control" 
                placeholder="0000000000000000000"
              >
            </div>
            <div class="form-group mt-4">
              <b-button 
                v-if="!config.isLoading"
                variant="outline-primary"
                @click="authenticateVisitorsID()"
              >
                  Authenticate ID
              </b-button>
              <b-button
                v-else
                variant="primary" 
                disabled
              >
                <b-spinner small type="grow"></b-spinner>
                Loading...
              </b-button>
            </div>
            <small class="form-text text-muted">We'll check if the SteamID exists and then bring your information.</small>
          </b-card-text>
        </b-card>

        <b-card 
          border-variant="primary" 
          header="Login" 
          class="text-center"
        >
          <b-card-text>
            <div class="form-group">
              <label for="username" class="form-label mt-2">Username</label>
              <input disabled class="form-control" id="username" placeholder="Username">
            </div>
            <div class="form-group">
              <label for="password" class="form-label mt-2">Password</label>
              <b-input-group>
                <input disabled :type="inputType" class="form-control" id="password" placeholder="Password">
                <b-input-group-append>
                  <b-button disabled @click="changePasswordFieldType()" variant="outline-primary">Show</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
            <b-row>
              <b-col>
                <div>
                  <b-button disabled variant="outline-primary">Login</b-button>
                </div>
              </b-col>
              <b-col>
                <div>
                  <b-button disabled variant="outline-success">Register</b-button>
                </div>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      config: {
        isLoading: false,
      },
      passwordField: true,
      visitorID: undefined,
    };
  },
  methods: {
    authenticateVisitorsID(){
      if(this.visitorID === undefined) return;
      this.config.isLoading = true;

      this.$axios.$post("visitor/auth", { key: this.visitorID })
        .then((response) => {
          if(response.status){
            console.log("Positiv")
            return;
          }
          console.log("Negativ")
        }
      ).finally(() => {
        this.config.isLoading = false;
      });
    },
    changePasswordFieldType(){
      this.passwordField = !this.passwordField;
    },
  },
  computed: {
    inputType(){
      return this.passwordField ? 'password' : 'text';
    }
  }
}
</script>