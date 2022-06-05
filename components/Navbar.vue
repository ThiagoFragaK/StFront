<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">
        <b-img
          src="~/assets/images/SeiteName.png"
          rounded
          width="250"
          height="20"
          alt="Rounded image"
        >
        </b-img>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/auth/login">Login</b-nav-item>
            <b-nav-item to="/todos">To-Do List</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item to="/user">Profile</b-dropdown-item>
            <b-dropdown-item to="/user/myGames">My Games</b-dropdown-item>
            <b-dropdown-item to="/user/myFriends">Friends List</b-dropdown-item>
            <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Toast from "vue-toastification";

export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    logout() {
        console.log('Logout');
    //   this.$store.dispatch("auth/logout").then((response) => {
    //     console.log(response);
    //   });
    },
  },
};
</script>