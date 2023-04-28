<!-- src/components/DataCleaning.vue -->
<template>
    <div class="data-cleaning">
      <h2>Data Cleaning & Transformation</h2>
      <div v-if="!data">
        <p>Please import data first.</p>
      </div>
      <div v-else>
        <div class="column-selection">
          <label for="column">Select Column:</label>
          <select id="column" v-model="selectedColumn">
            <option disabled value="">Select a column</option>
            <option v-for="col in columns" :key="col" :value="col">{{ col }}</option>
          </select>
        </div>
        <div v-if="selectedColumn">
          <button @click="removeColumn">Remove Column</button>
          <button @click="sortColumn">Sort Column</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import * as danfo from "danfojs-node";
  
  export default {
    name: "DataCleaning",
    props: {
      data: Array,
    },
    data() {
      return {
        selectedColumn: "",
        df: null,
        columns: [],
      };
    },
    watch: {
      data(newValue) {
        if (newValue) {
          this.df = new danfo.DataFrame(newValue);
          this.columns = this.df.column_names;
        } else {
          this.df = null;
          this.columns = [];
        }
      },
    },
    methods: {
      removeColumn() {
        this.df = this.df.drop({ columns: [this.selectedColumn], axis: 1 });
        this.updateData();
      },
      sortColumn() {
        this.df = this.df.sort_values({ by: this.selectedColumn });
        this.updateData();
      },
      updateData() {
        const newData = this.df.to_json();
        this.$emit("updated-data", newData);
      },
    },
  };
  </script>
  
  <style scoped>
  .data-cleaning {
    margin-top: 1rem;
  }
  
  .column-selection {
    margin-bottom: 1rem;
  }
  </style>
  