<template>
<div>
  <h1 class="view-title">Incomes Chart Statistic</h1>
  <BarChart/>
  <h1 class="view-title">Incomes and Costs Chart Statistic</h1>
  <LineChart/>
  <h1 class="view-title">Costs Chart Statistic</h1>
  <PieChart/>
</div>
</template>

<script>
import BarChart from "@/components/statistics/IncomesChartComponent";
import LineChart from "@/components/statistics/GeneralChartComponent";
import PieChart from "@/components/statistics/CostsChartComponent";



export default {
  name: "StatisticView",
  components: {PieChart, LineChart, BarChart}
}
</script>

<style scoped>

</style>