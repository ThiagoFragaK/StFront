<template>
  <b-container>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <my-games-card />
    </b-row>
  </b-container>
</template>

<script>
import MyGamesCard from '../../components/user/MyGamesCard.vue'

export default {
  components: { MyGamesCard },
  name: 'MyGamesPage'
}
</script>