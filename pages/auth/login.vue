<template>
  <b-container>
    <br />
    <br />
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-col lg="4" md="3"> </b-col>
      <b-col lg="4" md="3">
        <div>
          <b-card>
            <b-form>
              <div class="justify-content-md-center mt-3 mb-4">
                <b-img
                  src="~/assets/images/SeiteName.png"
                  width="250"
                  height="20"
                  alt="Rounded image"
                >
                </b-img>
              </div>
              <hr />

              <b-form-group label="User">
                <b-form-input
                  v-model="form.name"
                  placeholder="enter username"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Password">
                <b-form-input
                  v-model="form.password"
                  type="password"
                  placeholder="enter password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4">
                <b-form-checkbox>Remember me</b-form-checkbox>
              </b-form-group>
              <b-row class="justify-content-md-center mt-3">
                <b-row lg="6">
                  <b-button @click="login()" variant="primary">Login</b-button>
                </b-row>
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
import Toast from "vue-toastification";

export default {
  name: "LoginPage",
  layout: "login",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$axios.$post("login", this.form)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          this.$toast.error("Invalid Credentials", {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: true,
            rtl: false
          });
        });
    },
  },
};
</script>
// this.$store.commit('login/isLoggedIn');
// console.log(this.$store.state.login);