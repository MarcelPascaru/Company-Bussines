<template>
  <Bar
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
import { Bar } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
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
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
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
            label: 'Tickets',
            backgroundColor: '#f18f01',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          },
          {
            label: 'Sponsors',
            backgroundColor: '#8679f8',
            data: [80, 10, 42, 79, 20, 80, 59, 70, 20, 60, 22, 51]
          },
          {
            label: 'Brands',
            backgroundColor: '#bbf879',
            data: [45, 25, 13, 35, 20, 44, 31, 84, 45, 28, 11, 31]
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
