<template>
  <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  />
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)

export default{
  name: 'LineChart',
  components: {
    LineChartGenerator
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022'
        ],
        datasets: [
          {
            label: 'Incomes',
            backgroundColor: '#d01c1c',
            data: [40, 39, 10, 40, 39, 80, 40],
          },
          {
            label: 'Costs',
            backgroundColor: '#20276c',
            data: [60, 20, 25, 67, 32, 76, 35],
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
