<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

import axios from "axios";
import { store } from './store';

// export default {
//   methods: {
    // chiamo api per fare una ricerca nella barra di ricerca
    // fetchData(urlApi, type) {
    //   // if(store.apiParams.apiQuery.trim()) {
    //   //   axios .get(urlApi, {
    //   //     params: {
    //   //       api_key: store.apiParams.apiKey,
    //   //       query: store.apiParams.apiQuery,
    //   //       language: store.apiParams.language,
    //   //     },
    //   //   })
    //   //   .then((response) => {
    //   //     if (type === "movie") {
    //   //       store.movies.filmCard = response.data.results;
    //   //     } else if (type === "tv") {
    //   //       store.tvShow.cardTv = response.data.results
    //   //     }
    //   //   })
    //   //   .catch((error) => {
    //   //     console.error("errore", error);
    //   //     console.error("Messaggio di errore:", error.message);
    //   //       console.error("Risposta del server:", error.response);
    //   //   });
    //   // }

      
    // },
    // funzione che viene eseguita quando si preme il bottone cerca
    // ricerca() {
      // console log per vericare il funzionamento della query
      // console.log("Query di ricerca:", store.apiParams.apiQuery);

      // if (store.apiParams.apiQuery.trim() !== "") {
        // store.movies.titleMovie = `Ecco i film che hai cercato: ${store.apiParams.apiQuery}`;
        // chiamata api per ricerca
        // this.fetchData(store.movies.apiUrl, 'movie');
        // this.fetchData(store.tvShow.apiUrl, 'tv');

        // store.movies.titleMovie = `Ecco i film che hai cercato: ${store.apiParams.apiQuery}`;
        //   // svuoto i campo input
        // store.apiParams.apiQuery = "";
      // }
  //   },
  // },
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

