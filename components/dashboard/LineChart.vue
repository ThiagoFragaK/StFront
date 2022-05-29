<template>
  <b-container>
    <VueApexCharts
      max-width="300"
      type="line"
      :options="options"
      :series="series"
    ></VueApexCharts>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        }
      ],
      options: {
        chart: {
          type: "line",
          height: 350,
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
      },
    };
  },
};
</script>