import { ref, onMounted } from 'vue';

export default function useCountries() {
    const countries = ref([]);
    const isLoading = ref(true);
    const error = ref(null);

    const loadCountries = async () => {
        isLoading.value = true;
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            if (!response.ok) throw new Error('No se pudieron cargar los países');
            const data = await response.json();
            countries.value = data;
        } catch (err) {
            error.value = err.message;
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(loadCountries);

    return {
        countries,
        isLoading,
        error,
    };
}
