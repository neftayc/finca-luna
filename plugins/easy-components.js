import Vue from 'vue'
const NeftaCarousel = () => import('@/components/NeftaCarousel.vue')
const NeftaChart = () => import('@/components/NeftaChart.vue')

Vue.component(NeftaCarousel.name, NeftaCarousel)
Vue.component('NeftaChart', NeftaChart)
