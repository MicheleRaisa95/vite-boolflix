<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

import axios from "axios";
import { store } from './store';

export default {
  components: {
    HeaderComponent,
    MainComponent,
  },
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
    chiamataApi(apiUrl, type) {
      axios
        .get(apiUrl, {
          params: {
            api_key: store.apiParams.apiKey,
            region: store.apiParams.region,
            language: store.apiParams.language,
          },
        })
        .then((response) => {
          if (type === "movie") {
            store.movies.filmCard = response.data.results;
          } else if (type === "tv") {
            store.tvShow.cardTv = response.data.results;
          }
        })
        .catch((error) => {
          console.error("Errore durante la chiamata API:", error);
        });
    }
  },
  mounted() {
    // Chiamata API per ottenere i film popolari
    this.chiamataApi(store.filmPopolari.filmPopolari, 'movie');

    // Chiamata API per ottenere le serie TV popolari
    this.chiamataApi(store.tvShowPopolari.tvShowPopolari, 'tv');
  },
};
</script>
<template>
  <HeaderComponent @ricerca="ricerca"  />
  <MainComponent  />
</template>



