import { ref, computed, watch } from "vue";

export default function useSearch(items, searchParam) {
  const enteredSearchTerm = ref("");
  const activeSearchTerm = ref("");

  const availableItems = computed(() => {
    let filterdeItems = [];
    if (activeSearchTerm.value) {
      filterdeItems = items.filter((item) =>
        item[searchParam].includes(activeSearchTerm.value)
      );
    } else if (items) {
      filterdeItems = items;
    }
    return filterdeItems;
  });

  watch(enteredSearchTerm, (newValue) => {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  const updateSearch = (val) => {
    enteredSearchTerm.value = val;
  };

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  };
}
