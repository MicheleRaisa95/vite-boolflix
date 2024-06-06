<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

import axios from "axios";
import { store } from './store';

export default {
  methods: {
    // chiamo api per fare una ricerca nella barra di ricerca
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
          } else if (type === "tv") {
            store.tvShow.cardTv = response.data.results
          }
        });
      }
    },
    // funzione che viene eseguita quando si preme il bottone cerca
    ricerca() {
      // console log per vericare il funzionamento della query
      console.log("Query di ricerca:", store.apiParams.apiQuery);

      

      this.fetchData(store.movies.apiUrl, store.movies.type);
      if (store.apiParams.apiQuery.trim() !== "") {
        store.movies.titleMovie = `Ecco i film che hai cercato: ${store.apiParams.apiQuery}`;
        // chiamata api per ricerca
        this.fetchData(store.movies.filmCard, store.movies.type);
        this.fetchData(store.tvShow.apiTv, store.tvShow.type)
        .then(response => store.tvShow.cardTv = response.data.results);
      }
      // svuoto i campo input
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

