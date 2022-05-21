<template>
  <b-container>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-col lg="12">
        <b-card no-body class="overflow-hidden" style="max-height: 250px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="userInfo.avatarfull" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="userInfo.personaname">
                <b-card-text>{{ userInfo.realname }}</b-card-text>
                <br/>
                <b-button :href="userInfo.profileurl" variant="outline-primary">Steam Profile</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-col lg="4" md="3">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mx-auto"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card> 
      </b-col>
      <b-col lg="4" md="3">
        <div>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mx-auto"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>    
      </b-col>
      <b-col lg="4" md="3">
        <div>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mx-auto"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>    
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'UserPage',
  data(){
    return {
      userInfo: {
        avatarfull: null,
        personaname: null,
        realname: null,
        profileurl: null
      } 
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      this.$axios.$get('v1/user')
				.then((response) => {
          this.userInfo = response;
          console.log(this.userInfo)
				}
      )
    }
  }
}
</script>