<template>
  <div class="data-visualization">
    <h1>Data Visualization</h1>
    <div class="import-buttons">
      <button @click="importFromJSON">Import from JSON</button>
      <button @click="importFromAPI">Import from API</button>
    </div>
    <div v-if="importedData">
      <h2>Imported Data</h2>
      <ul>
        <li v-for="(item, index) in importedData" :key="index">
          <span>{{ item.label }}:</span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
      <InteractiveChart :data="chartData" />
    </div>
  </div>
</template>

<script>
import InteractiveChart from "@/components/InteractiveChart.vue";
import axios from "axios";

export default {
  name: "DataVisualization",
  components: {
    InteractiveChart,
  },
  data() {
    return {
      importedData: null,
    };
  },
  computed: {
    chartData() {
      if (!this.importedData) return [];
      return this.importedData.map((item) => ({
        label: item.label,
        value: parseFloat(item.value),
      }));
    },
  },
  methods: {
    importFromJSON() {
      axios.get("/data.json").then((response) => {
        this.importedData = response.data;
      });
    },
    importFromAPI() {
      axios.get("https://api.npoint.io/42fd33fb769deaa7fdc0").then((response) => {
        this.importedData = response.data;
      });
    },
  },
};
</script>

<style scoped>
.data-visualization {
  width: 100%;
}

.import-buttons {
  margin-bottom: 1rem;
}

.import-buttons button {
  margin-right: 1rem;
}
</style>