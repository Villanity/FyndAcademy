<template>
  <div id="app">
    <header>
      <img src="./assets/images/logo.png" alt="Logo" />
      <h1>AI-Driven Data Visualization Tool</h1>
    </header>
    <main>
      <DataImport @imported-data="updateData" />
      <InteractiveChart :data="chartData" />
    </main>
  </div>
</template>

<script>
import DataImport from "@/components/DataImport.vue";
import InteractiveChart from "@/components/InteractiveChart.vue";

export default {
  name: "App",
  components: {
    DataImport,
    InteractiveChart,
  },
  data() {
    return {
      chartData: [
        { label: "January", value: 10 },
        { label: "February", value: 20 },
        { label: "March", value: 15 },
        { label: "April", value: 30 },
        { label: "May", value: 25 },
        { label: "June", value: 40 },
      ],
    };
  },
  methods: {
    updateData(data) {
      this.chartData = data;
    },
  },
};
</script>
