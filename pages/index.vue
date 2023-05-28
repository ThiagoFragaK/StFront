<template>
  <b-container fluid="lg">
    <b-row class="justify-content-md-center mt-4 mb-4">
      <b-card-group 
        deck 
        class="mb-3"
      >
        <visitors-form />
        <login-form />
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
import VisitorsForm from '../components/main_page/VisitorsForm.vue';
import LoginForm from '../components/main_page/LoginForm.vue';

export default {
  name: 'IndexPage',
  components: {
    VisitorsForm,
    LoginForm,
  },
  data(){
    return {
    };
  },
}
</script>