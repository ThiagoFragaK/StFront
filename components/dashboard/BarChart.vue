<template>
  <b-container>
    <VueApexCharts
      max-width="300"
      type="bar"
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
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
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