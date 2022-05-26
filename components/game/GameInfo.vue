<template>
  <b-container>
    <b-card >
      <template #header>
        <b-row align-v="center" class="justify-content-md-center mt-3">
          <b-col lg="2">
            <b-avatar rounded size="6rem" src="https://placekitten.com/300/300"></b-avatar>
          </b-col>
          <b-col lg="10">
            <h3 >Name</h3>
          </b-col>
        </b-row>
      </template>
      <b-card-text>
        <b-row>
          <b-col>Info#01: 1 of 3</b-col>
          <b-col>Info#02: 2 of 3</b-col>
          <b-col>Info#03: 3 of 3</b-col>
          <b-col>Info#04: 4 of 3</b-col>
        </b-row>
        <br/>
        <b-row>
          <b-col>Info#01: 1 of 3</b-col>
          <b-col>Info#02: 2 of 3</b-col>
          <b-col>Info#03: 3 of 3</b-col>
          <b-col>Info#04: 4 of 3</b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>