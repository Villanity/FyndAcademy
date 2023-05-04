<template>
  <div class="col-md-4" id="mainFrame">
    <div class="col">
      <div class="dataImport">
        <h2>Please choose your Data Source :</h2>
        <div class="importOptions">
          <select name="import-source" id="import-source" v-model="importSource">
            <option value="none" selected disabled>Select an Import Source</option>
            <!-- <option value="xlsx">Excel</option> -->
            <option value="csv">EXCEL or CSV</option>
            <option value="json">JSON</option>
            <option value="api">API</option>
          </select>
        </div>

        <div class="nextAction" id="nextAction">
          <!-- <div v-if="importSource === 'xlsx'">
            <input type="file" accept=".xlsx, .xls" @change="importExcel">
          </div> -->
          <div v-if="importSource === 'csv'">
            <input type="file" accept=".csv, .xlsx, .xls" @change="importCSV">
          </div>
          <div v-else-if="importSource === 'json'">
            <input type="file" accept=".json" @change="importJSON">
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
import Chart from 'chart.js/auto';
import Papa from 'papaparse';
import ExcelJS from 'exceljs';

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
      csvEvent: null,
      apiURLType: '',
    }
  },
  methods: {

    importCSV(event) {
      this.csvEvent = event;
      const file = event.target.files[0];

      // Convert Excel files to CSV format
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        const reader = new FileReader();
        reader.onload = () => {
          const buffer = reader.result;
          const workbook = new ExcelJS.Workbook();
          workbook.xlsx.load(buffer).then(() => {
            const worksheet = workbook.getWorksheet(1);
            const csvData = [];

            // Convert each row to CSV format
            worksheet.eachRow({ includeEmpty: false }, (row) => {
              const csvRow = row.values.join(',');
              csvData.push(csvRow);
            });

            // Join all rows together into a single CSV string
            const csvString = csvData.join('\n');

            // Parse the CSV string using Papa.parse
            const parsedData = Papa.parse(csvString, { header: true }).data;
            this.createChart(parsedData);
            this.$emit('dataImported', parsedData);
          });
        };
        reader.readAsArrayBuffer(file);
      }

      // Handle regular CSV files
      else if (file.type === 'text/csv') {
        const reader = new FileReader();
        reader.onload = () => {
          const data = Papa.parse(reader.result, { header: true }).data;
          this.createChart(data);
          this.$emit('dataImported', data);
        };
        reader.readAsText(file);
      }

      else {
        alert('Error: Please upload a CSV file.');
        return;
      }
    },

    importJSON(event) {
      // console.log(event)
      this.jsonEvent = event;
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const data = JSON.parse(e.target.result);
            this.$emit("dataImported", data);
            this.createChart(data);
            console.log("JSON Loaded", data);
          } catch (error) {
            alert("Error: Invalid JSON format.");
          }
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
      if (this.importSource === 'csv') {
        this.importCSV(this.csvEvent);
      }
      if (this.importSource === 'json') {
        this.importJSON(this.jsonEvent);
      }
      if (this.importSource === 'api') {
        this.importFromAPI(this.apiURLType);
      }
    },

    createChart(chartData) {

      const labels = Array.from(chartData).map(row => row.year);
      const data = Array.from(chartData).map(row => row.count);


      this.showType = true;
      const typeChart = this.type;

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
