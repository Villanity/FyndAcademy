<template>
  <div class="col-md-4" id="mainFrame">
    <div class="col">
      <div class="dataImport">
        <h2>Please choose your Data Source :</h2>
        <div class="importOptions">
          <select name="import-source" id="import-source" v-model="importSource">
            <option value="none" selected disabled>Select an Import Source</option>
            <option value="json">JSON</option>
            <option value="api">API</option>
          </select>
        </div>

        <div class="nextAction" id="nextAction">
          <div v-if="importSource === 'json'">
            <input type="file" @change="importJSON">
          </div>
          <div v-else-if="importSource === 'api'">
            <label for="APIField">Please enter the URL</label>
            <input type="text" name="APIField" id="APIField" v-model="apiLink">
            <button @click="importFromAPI(apiLink)"> Fetch </button>
          </div>
        </div>
      </div>

      <div v-if="showType != false">
        <div class="chartType">
          <select name="chart-type" id="chart-type" v-model="chartType" @change="setType">
            <option value="bar">Bar</option>
            <option value="line">Line</option>
            <option value="bubble">Bubble</option>
            <option value="doughnut">Doughnut</option>
            <option value="pie">Pie</option>
            <option value="polarArea">Polar Area</option>
            <option value="radar">Radar</option>
            <option value="scatter">Scatter</option>
          </select>
        </div>
      </div>

      <canvas ref="chartCanvas"></canvas>

    </div>
  </div>
</template>
<script>
import Chart from 'chart.js/auto'

export default {
  name: 'dashboardPage',
  data() {
    return {
      importSource: "none",
      chartType: "bar",
      showType: false,
      type: 'bar',
      chartInstance: null,
      jsonEvent: null,
      apiURLType: '',
    }
  },
  methods: {

    importJSON(event) {
      this.jsonEvent = event;
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = JSON.parse(e.target.result);
          this.$emit("dataImported", data);
          this.createChart(data);
          console.log("JSON Loaded", data);
        };
        reader.readAsText(file);
      }
    },
    async importFromAPI(apiURL) {
      this.apiURLType = apiURL;
      // apiURL = 'https://api.npoint.io/8f97cfcef94b992f44f6';
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        this.$emit("dataImported", data);
        this.createChart(Array.from(data));
        console.log("Data Loaded from API", data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    },

    setType() {
      this.type = this.chartType;
      const chartData = this.chartInstance.config.data;
      this.createChart(chartData);
      if (this.importSource === 'json') {
        this.importJSON(this.jsonEvent);
      }
      else {
        this.importFromAPI(this.apiURLType);
      }
    },

    createChart(chartData) {

      const labels = Array.from(chartData).map(row => row.year);
      const data = Array.from(chartData).map(row => row.count);


      this.showType = true;
      const typeChart = this.type;
      console.log(typeChart);
      console.log(chartData);

      const canvas = this.$refs.chartCanvas;
      const ctx = canvas.getContext('2d');

      if (this.chartInstance != null) {
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart(ctx, {
        type: typeChart,
        data: {
          labels,
          datasets: [{
            label: 'Acquisitions by year',
            data
          }]
        }
      });
    }

  }
}
</script>
