<template>
  <section>
    <h2>Países</h2>
    <input
        type="text"
        v-model="searchTerm"
        placeholder="Buscar país..."
        class="search-input"
    />
    <button @click="clearInputSearch">Clear</button>
    <ul>
      <li
          v-for="country in filteredCountries"
          :key="country.cca3"
          @click="$emit('select-country', country)"
      >
        {{ country.name.common }}
      </li>
    </ul>
  </section>
</template>


<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  countries: {
    type: Array,
    required: true
  }
});

// Busqueda de paises por input
const searchTerm = ref('');

const filteredCountries = computed(() => {
  if (!searchTerm.value) return props.countries;
  return props.countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

// Limpiar input
const clearInputSearch = () => {
  searchTerm.value = "";
}

// Envio de datos para una funcion
const emit = defineEmits(['select-country']);
</script>

<style scoped>
.search-input {
  width: 90%;
  padding: 6px 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
h2 {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  cursor: pointer;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  transition: background 0.2s ease;
}

li:hover {
  background-color: #e6f7ff;
}
</style>

