<script>
import CardFilmComponent from "./CardFilmComponent.vue";
import { store } from "../store";
export default {
    data() {
        return {
            store,
        };
    },
    mounted() {
        console.log("Film Card:", this.store.movies.filmCard);
        console.log("TV Card:", this.store.tvShow.cardTv);  
    },
    components: {
        CardFilmComponent,
    }

};
</script>

<template>
    <main class="p-3">
        <h2>{{ store.movies.titleMovie }}</h2>
        <!-- lista film -->
        <ul v-if="store.movies.filmCard.length > 0">
            <li v-for="card in store.movies.filmCard" :key="card.id">
                <CardFilmComponent
                    :copertina="card.poster_path"
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
        <ul v-if="store.tvShow.cardTv && store.tvShow.cardTv.length > 0">
            <li v-for="tvCard in store.tvShow.cardTv" :key="tvCard.id">
                <CardFilmComponent 
                    :copertina="tvCard.poster_path"
                    :titolo="tvCard.name" 
                    :titoloOriginale="tvCard.original_name" 
                    :lingua="tvCard.original_language" 
                    :voto="tvCard.vote_average" 
                />
            </li>
        </ul>
        <!-- /lista tv -->
    </main>
</template>