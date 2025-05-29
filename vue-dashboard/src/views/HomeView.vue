<template>
  <div class="app-container">
    <aside class="sidebar">
      <CountryList :countries="countries" @select-country="selectCountry" />
    </aside>
    <main class="main-content">
      <CountryDetails :country="selectedCountry" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CountryDetails from "../components/CountryDetails.vue";
import CountryList from "../components/CountryList.vue";
import useCountries from "../hooks/useCountries.js";


const { countries } = useCountries();
const selectedCountry = ref(null);

function selectCountry(country) {
  selectedCountry.value = country;
}
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.sidebar {
  width: 300px;
  border-right: 1px solid #ccc;
  overflow-y: auto;
  padding: 1rem;
  background-color: #f9f9f9;
}

.main-content {
  flex-grow: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
