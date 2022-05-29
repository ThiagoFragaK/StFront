<template>
  <b-container fluid="lg">
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-col lg="6" md="12"> 
        <bar-chart />
      </b-col>
      <b-col lg="6" md="12"> 
        <bar-chart />
      </b-col>
    </b-row>
    <b-row align-v="center" class="justify-content-md-center mt-3">
      <b-col lg="6" md="12"> 
        <area-chart />
      </b-col>
      <b-col lg="6" md="12"> 
        <line-chart />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BarChart from '../components/dashboard/BarChart.vue'
import AreaChart from '../components/dashboard/AreaChart.vue'
import LineChart from '../components/dashboard/LineChart.vue'

export default {
  components: { BarChart, AreaChart, LineChart },
  name: 'IndexPage'
}
</script>
