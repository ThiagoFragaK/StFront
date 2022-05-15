<template>
  <b-container>
    <br />
    <br />
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-col lg="4" md="3">
      </b-col>
      <b-col lg="4" md="3">
        <div>
            <b-card
                title="Login"
                tag="article"
                class="mb-2"
                align-self="center"
            >
                <b-form inline>
                    <label class="sr-only" for="inline-form-input-name">Name</label>
                    <b-form-input
                        id="inline-form-input-name"
                        class="mx-auto"
                        placeholder="User"
                    ></b-form-input>
                    <br />
                    <b-form-input
                        id="inline-form-input-name"
                        class="mx-auto"
                        placeholder="Password"
                    ></b-form-input>
                    <br />
                    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
                    <b-row align-v="center">
                        <b-col lg="12" class="pb-2">
                            <b-button variant="primary">Login</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-card>            
        </div>    
      </b-col>
      <b-col lg="4" md="3">    
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    name: "LoginPage",
    layout: 'login'
};
</script>