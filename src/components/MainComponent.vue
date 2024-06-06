<script>
import CardFilmComponent from "./CardFilmComponent.vue";
import { store } from "../store";
export default {
    data() {
        return {
            store,
        };
    },
    components: {
        CardFilmComponent,
    }

};
</script>

<template>
    <!-- lista film -->
    <ul>
        <li v-for="card in store.movies.filmCard" v-if="card" :key="card.id">
        <CardFilmComponent
            :titolo="card.title"
            :titoloOriginale="card.original_title"
            :lingua="card.original_language"
            :voto="card.vote_average"
        />
        </li>

        <li v-if="!store.movies.filmCard">
        Caricamento in corso...
        </li>
        <li v-for="card in store.movies.filmCard || []" :key="card.id">
        <CardFilmComponent
            :titolo="card.title"
            :titoloOriginale="card.original_title"
            :lingua="card.original_language"
            :voto="card.vote_average"
        />
        </li>
    </ul>
    <!-- lista film -->


    <!-- lista tv -->
    <ul v-if="store.tvShow.cardTv.length > 0">
        <li v-for="tvCard in store.tvShow.cardTv" v-if="tvCard" :key="tvCard.id">
        <CardFilmComponent 
        :titolo="tvCard.name" 
        :titoloOriginale="tvCard.original_name" 
        :lingua="tvCard.original_language" 
        :voto="tvCard.vote_average" 
        />
        </li>
    </ul>
    <!-- /lista tv -->
</template>