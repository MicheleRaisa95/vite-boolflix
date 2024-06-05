<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import { fetchData, store} from './store.js'
export default {
  name: 'BoolFlix',
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      movies: []
    };
  },
  methods: {
    searchMovies(query) {
      store.searchQuery = query;
      fetchData();
    }
  }
};
</script>

<template>
  <HeaderComponent @search="searchMovies" />
  <MainComponent :movies="movies" />
</template>

