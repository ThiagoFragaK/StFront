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
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/user">User</b-nav-item>
          </b-navbar-nav>
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
  methods: {},
};
</script>