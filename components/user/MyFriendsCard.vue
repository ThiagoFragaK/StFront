<template>
  <b-container>
    <b-row v-if="loaded" align-v="center" class="justify-content-md-center mt-3">
      <b-row align-v="center" class="justify-content-md-center mt-3">
        <b-col lg="12">
          <br/>
        </b-col>
        
        <b-col lg="12" >
          <div>
            <b-table striped hover :fields="tableColumns" :items="tableItens">              
              <template #cell(image)="data">
                <b-avatar 
                  variant="dark" 
                  square
                  rounded
                  :src= "data.item.image">
                  </b-avatar>
              </template>
              <template #cell(name)="data">
                  {{data.item.name}}
              </template>
              <template #cell(added)="data">
                  {{data.item.added}}
              </template>
              <template #cell(addedDetails)="data">
                  {{ data.item.addedDetails }}
              </template>
              <template #cell(profileurl)="data">
                <b-button 
                  size="sm"
                  variant="outline-primary"
                  :href="data.item.profileurl"
                  >
                  Steam Profile
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
	{ key: "image", label: "", class: "text-center" },
	{ key: "name", label: "Name", class: "text-center" },
	{ key: "added", label: "Added Date", class: "text-center" },
	{ key: "addedDetails", label: "Time since", class: "text-center" },
	{ key: "profileurl", label: "Steam Profile", class: "text-center" },
];

export default {
  name: "MyFriendsPage",
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
      this.$axios.$get('steam/user/friendsList')
        .then((response) => {
          this.tableItens = response;
          this.loaded = true;
        }
      )
    },
  }
};
</script>