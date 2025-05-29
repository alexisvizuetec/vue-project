<template>
  <section v-if="country">
    <h2>{{ country.name.common }}</h2>
    <img :src="country.flags.svg" :alt="country.name.common + ' flag'" width="200" />
    <p><strong>Capital:</strong> {{ country.capital?.[0] || 'N/A' }}</p>
    <p><strong>Región:</strong> {{ country.region }}</p>
    <p><strong>Población:</strong> {{ country.population.toLocaleString() }}</p>
  </section>

  <section v-else>
    <p>Selecciona un país para ver los detalles.</p>
  </section>
</template>

<script setup>
const props = defineProps({
  country: {
    type: Object,
    default: null,
  }
});
</script>

<style scoped>
section {
  margin-top: 20px;
}

h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #1e90ff;
}

p {
  font-size: 1rem;
  margin: 6px 0;
}

img {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>

