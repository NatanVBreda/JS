<template>
  <div id="app">
    <router-view />
    <api-data></api-data> <!-- Adicione esta linha para incluir o componente ApiData.vue -->
  </div>
</template>

<script>
import ApiData from './components/ApiData.vue';

export default {
  components: {
    ApiData
  }
};
</script>