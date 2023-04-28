<template>
    <div class="interactive-chart">
        <h2>Interactive Chart</h2>
        <div v-if="!data || data.length === 0">
            <p>Please import data first.</p>
        </div>
        <div v-else>
            <div class="chart-options">
                <label for="chart-type">Chart Type:</label>
                <select id="chart-type" v-model="chartType">
                    <option value="bar">Bar</option>
                    <option value="line">Line</option>
                    <option value="pie">Pie</option>
                </select>
                <label for="color">Color:</label>
                <input type="color" id="color" v-model="color" />
                <label for="opacity">Opacity:</label>
                <input type="range" id="opacity" v-model="opacity" min="0" max="1" step="0.1" />
            </div>
            <div class="chart-container">
                <canvas id="chart"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import { Chart } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);

export default {
    name: "InteractiveChart",
    props: {
        data: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            chartType: "bar",
            color: "#f87979",
            opacity: 1,
            chartInstance: null,
        };
    },
    mounted() {
        this.createChart();
    },
    watch: {
        chartType: {
            handler: function () {
                this.updateChart();
            },
        },
        color: {
            handler: function () {
                this.updateChart();
            },
        },
        opacity: {
            handler: function () {
                this.updateChart();
            },
        },
        data: {
            handler: function () {
                this.updateChart();
            },
        },
    },
    methods: {
    updateChart() {
        if (this.chartInstance) {
            this.chartInstance.destroy();
        }
        if (this.data && this.data.length > 0) {
            this.createChart();
        }
    },
    createChart() {
        const ctx = document.getElementById("chart").getContext("2d");
        const dataset = this.generateDataset(this.data);

        this.chartInstance = new Chart(ctx, {
            type: this.chartType,
            data: {
                labels: dataset.labels,
                datasets: [
                    {
                        label: "Data",
                        data: dataset.values,
                        backgroundColor: this.colorWithOpacity(
                            this.color,
                            this.opacity
                        ),
                        borderColor: this.color,
                        borderWidth: 1,
                        pointBackgroundColor: this.colorWithOpacity(this.color, this.opacity),
                        pointBorderColor: this.color,
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: this.color,
                        fill: true,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true,
                            },
                            mode: "xy",
                        },
                    },
                },
            },
        });
    },
    generateDataset(data) {
        const labels = data.map((item) => item.label);
        const values = data.map((item) => item.value);
        return { labels, values };
    },
    colorWithOpacity(color, opacity) {
        const alpha = Math.round(opacity * 255);
        return `rgba(${ Chart.helpers.color(color).rgb }, ${ alpha })`;
    },
},
};
</script>

<style>
.interactive-chart {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.chart-options {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.chart-options label {
    margin-right: 10px;
}

.chart-container {
    position: relative;
    height: 400px;
    width: 100%;
}

.chart-container canvas {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
</style>
