// src/store/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    chartData: null,
  },
  mutations: {
    setChartData(state, data) {
      state.chartData = data;
    },
  },
  actions: {
    updateChartData({ commit }, data) {
      commit('setChartData', data);
    },
  },
  getters: {
    getChartData(state) {
      return state.chartData;
    },
  },
  modules: {},
});
