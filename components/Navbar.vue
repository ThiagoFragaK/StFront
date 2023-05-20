<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <b-navbar-brand to="/">
        <b-img
          rounded
          width="250"
          height="20"
          alt="Rounded image"
          class="ml-3 mr-3"
          src="~/assets/images/SeiteName.png"
        >
        </b-img>
      </b-navbar-brand>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarColor01" 
        aria-controls="navbarColor01" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <b-navbar-nav class="ml-4">
        <b-navbar-nav>
          <b-nav-item to="/user" class="active">User</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </div>
  </nav>
</template>