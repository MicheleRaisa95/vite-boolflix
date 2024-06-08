<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

import axios from "axios";
import { store } from './store';

  export default {
  methods: {
    ricerca() {
      axios
        .get(store.movies.apiUrl, {
          params: {
            api_key: store.apiParams.apiKey,
            query: store.apiParams.apiQuery,
            language: store.apiParams.language,
          },
        })
        .then((response) => {
          store.movies.filmCard = response.data.results;
        });
      axios
        .get(store.tvShow.apiTv, {
          params: {
            api_key: store.apiParams.apiKey,
            query: store.apiParams.apiQuery,
            language: store.apiParams.language,
          },
        })
        .then((response) => {
        store.tvShow.cardTv = response.data.results;
        });
      store.apiParams.apiQuery = "";
    },
  },
  components: {
    HeaderComponent,
    MainComponent,
  },
};

</script>

<template>
  <HeaderComponent @ricerca="ricerca"  />
  <MainComponent  />
</template>



