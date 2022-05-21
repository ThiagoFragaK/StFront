<template>
  <b-container>
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