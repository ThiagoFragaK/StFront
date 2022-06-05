<template>
  <b-container>
    <b-row
      v-if="loaded"
      align-v="center"
      class="justify-content-md-center mt-3"
    >
      <div>
        <b-table striped hover :fields="tableColumns" :items="tableItens">
          <template #cell(image)="data">
            <b-avatar square variant="dark" :src="getImage(data.item)">
            </b-avatar>
          </template>
          <template #cell(name)="data">
            {{ data.item.name }}
          </template>
          <template #cell(description)="data">
            {{ data.item.description }}
          </template>
          <template #cell(globalStat)="data">
            {{ data.item.globalStat }} %
          </template>
          <template #cell(isHidden)="data">
            {{ isHidden(data.item) }}
          </template>
          <template #cell(achieved)="data">
            {{ getStatus(data.item) }}
          </template>
          <template #cell(unlocked)="data">
            {{ getUnlockDate(data.item) }}
          </template>
        </b-table>
      </div>
    </b-row>
    <b-row
      v-else-if="!loaded"
      align-v="center"
      class="justify-content-md-center mt-3"
    >
      <b-spinner variant="primary"></b-spinner>
    </b-row>
  </b-container>
</template>

<script>
let tableColumns = [
  { key: "image", label: "", class: "text-center" },
  { key: "name", label: "Name", class: "text-center" },
  { key: "description", label: "Description", class: "text-center" },
  { key: "globalStat", label: "Global Unlock Rate", class: "text-center col-2" },
  { key: "isHidden", label: "Hidden", class: "text-center" },
  { key: "achieved", label: "Achieved", class: "text-center" },
  { key: "unlocked", label: "Unlock Date", class: "text-center" },
];

export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      loaded: false,
      tableItens: {},
      tableColumns,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var gameId = this.id;
      this.$axios.$get(`v2/achievements/user/${gameId}`).then((response) => {
        this.tableItens = response;
        this.loaded = true;
      });
    },
    getImage(item) {
      if (item.achieved == 1) {
        return item.unlockedImage;
      } else {
        return item.lockedImage;
      }
    },
    getStatus(item) {
      return item.achieved ? "Unlocked" : "Locked";
    },
    isHidden(item) {
      return item.isHidden ? "Yes" : "No";
    },
    getUnlockDate(item) {
      if (item.achieved == 1) {
        return item.unlocked;
      } else {
        return "-";
      }
    },
  },
};
</script>