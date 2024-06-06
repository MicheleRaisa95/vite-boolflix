<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

import axios from "axios";
import { store } from './store';

export default {
  methods: {
    fetchData(urlApi, type) {
      if(store.apiParams.apiQuery.trim()) {
        axios .get(urlApi, {
          params: {
            api_key: store.apiParams.apiKey,
            query: store.apiParams.apiQuery,
            language: store.apiParams.language,
          },
        })
        .then((response) => {
          if (type === "movie") {
            store.movies.filmCard = response.data.results;
          }
        });
      }
    },
    ricerca() {
      console.log("Query di ricerca:", store.apiParams.apiQuery);
      this.fetchData(store.movies.apiUrl, store.movies.type);
      if (store.apiParams.apiQuery.trim() !== "") {
        store.movies.titleMovie = `Ecco i film che hai cercato: ${store.apiParams.apiQuery}`;

        this.fetchData(store.movies.filmCard, store.movies.type);
      }

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

