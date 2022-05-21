<template>
  <b-container>
    <b-row v-if="loaded" align-v="center" class="justify-content-md-center mt-3">
      <b-row align-v="center" class="justify-content-md-center mt-3">
        <b-col lg="6">
          <b-card title="Card title" sub-title="Card subtitle">
            <b-card-text>
              Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
              content.
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card title="Card title" sub-title="Card subtitle">
            <b-card-text>
              Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
              content.
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
          </b-card>
        </b-col>
        <br/>
        <b-col lg="12" >
          <div>
            <b-table striped hover :fields="tableColumns" :items="tableItens">
              <template #cell(gameName)="data">
                  {{data.item.gameName}}
              </template>
              <template #cell(playTime)="data">
                  {{data.item.playTime}}hrs
              </template>
              <template #cell(gameId)="data">
                <b-button 
                  @click="redirect(data.item.appid)"
                  size="sm"
                  variant="outline-primary">
                  Achievements
                </b-button>
              </template>
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-row>
    <b-row v-else-if="!loaded" align-v="center" class="justify-content-md-center mt-3">
      <b-spinner variant="primary"></b-spinner>
    </b-row>
  </b-container>
</template>

<script>

let tableColumns = [
	{ key: "gameName", label: "Name", class: "text-center" },
	{ key: "playTime", label: "Name", class: "text-center" },
  { key: "gameId", label: "", class: "text-center col-1" }
];

export default {
  name: "MyGamesPage",
  data(){
    return {
      loaded: false,
      tableItens: {},
      tableColumns
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      this.$axios.$get('v1/games')
        .then((response) => {
          this.tableItens = response.data;
          this.loaded = true;
          console.log(this.tableItens)
        }
      )
    },
    redirect(appId){
      return;
    }
  }
};
</script>