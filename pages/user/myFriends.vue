<template>
  <b-container>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <my-friends-card />
    </b-row>
  </b-container>
</template>

<script>
import MyFriendsCard from '../../components/user/MyFriendsCard.vue'

export default {
  components: { MyFriendsCard },
  name: 'MyGamesPage'
}
</script>