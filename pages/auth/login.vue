<template>
  <b-container>
    <br />
    <br />
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-col lg="4" md="3"> </b-col>
      <b-col lg="4" md="3">
        <div>
            <b-card>
                <b-form >
                    <h3 align="center">Login</h3>
                    <hr/>

                    <b-form-group label="User" >
                        <b-form-input placeholder="enter username" required ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Password" >
                        <b-form-input type="password" placeholder="enter password" required ></b-form-input>
                    </b-form-group>


                    <b-form-group id="input-group-4">
                        <b-form-checkbox >Remember me</b-form-checkbox>
                    </b-form-group>
                    <b-row align-v="center" class="justify-content-md-center mt-3">
                        <b-col lg="6" md="3">
                            <b-button variant="secondary">Forgot Password</b-button>
                        </b-col>
                        <b-col lg="4" md="3">
                            <b-button variant="primary">Login</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-card>
        </div>
      </b-col>
      <b-col lg="4" md="3"> </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "LoginPage",
  layout: "login",
  data() {
    return {
      form: {
      }
    };
  },
  methods: {
    onSubmit(event) {
    //   Add Code Here
    },
  },
};
</script>