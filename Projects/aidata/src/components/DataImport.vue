<!-- src/components/DataImport.vue -->
<template>
  <div class="data-import">
    <h2>Data Import</h2>
    <div class="import-options">
      <label for="import-source">Import Source:</label>
      <select id="import-source" v-model="importSource">
        <option value="json">JSON File</option>
        <option value="api">API</option>
        <option value="database">Database</option>
      </select>
    </div>
    <div v-if="importSource === 'json'">
      <input type="file" @change="importJSON" />
    </div>
    <div v-else-if="importSource === 'api'">
      <button @click="fetchDataFromAPI">Fetch Data from API</button>
    </div>
    <div v-else-if="importSource === 'database'">
      <button @click="fetchDataFromDatabase">Fetch Data from Database</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataImport",
  data() {
    return {
      importSource: "json",
    };
  },
  methods: {
    importJSON(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = JSON.parse(e.target.result);
          this.$emit("dataImported", data); // emit dataImported event
        };
        reader.readAsText(file);
        console.log("JSON Loaded")
      }
    },
    async fetchDataFromAPI() {
      try {
        const response = await fetch("https://api.npoint.io/42fd33fb769deaa7fdc0");
        const data = await response.json();
        this.$emit("dataImported", data); // emit dataImported event
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    },
    async fetchDataFromDatabase() {
      try {
        // Replace this with your actual database connection logic
        const data = await this.mockDatabaseFetch();
        this.$emit("dataImported", data); // emit dataImported event
      } catch (error) {
        console.error("Error fetching data from database:", error);
      }
    },
    mockDatabaseFetch() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { label: "A", value: 10 },
            { label: "B", value: 20 },
            { label: "C", value: 30 },
          ]);
        }, 1000);
      });
    },
  },
};
</script>


<style scoped>
.data-import {
  margin-bottom: 1rem;
}

.import-options {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
