import { ref, computed, watch } from 'vue';

export default function useSearch(itemsRef, searchField) {
    const searchTerm = ref('');
    const debouncedSearch = ref('');

    // Simulamos un debounce manual simple (idealmente usa lodash.debounce si es más complejo)
    watch(searchTerm, (newValue) => {
        setTimeout(() => {
            if (newValue === searchTerm.value) {
                debouncedSearch.value = newValue;
            }
        }, 300);
    });

    const filteredItems = computed(() => {
        if (!debouncedSearch.value) return itemsRef.value;
        return itemsRef.value.filter((item) =>
            item[searchField].toLowerCase().includes(debouncedSearch.value.toLowerCase())
        );
    });

    return {
        searchTerm,
        filteredItems
    };
}
