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
        <h2 class="m-5">{{ store.movies.titleMovie }}</h2>

        <!-- lista film -->
        <ul v-if="store.movies.filmCard.length > 0" class="d-flex flex-wrap justify-content-center gap-3 p-0">
            <li v-for="card in store.movies.filmCard" :key="card.id">

                <!-- card -->
                <CardFilmComponent
                    :copertina="card.poster_path"
                    :titolo="card.title"
                    :titoloOriginale="card.original_title"
                    :lingua="card.original_language"
                    :voto="card.vote_average"
                    :overview="card.overview"
                />
                <!-- /card -->

            </li>


        </ul>
        <!-- lista film -->


        <!-- lista tv -->
        <h2 class="m-5">{{ store.tvShow.titleTv }}</h2>
        <ul v-if="store.tvShow.cardTv && store.tvShow.cardTv.length > 0" class="d-flex flex-wrap justify-content-center gap-3 p-0" >
            <li v-for="tvCard in store.tvShow.cardTv" :key="tvCard.id">
                <!-- tv card -->
                <CardFilmComponent 
                    :copertina="tvCard.poster_path"
                    :titolo="tvCard.name" 
                    :titoloOriginale="tvCard.original_name" 
                    :lingua="tvCard.original_language" 
                    :voto="tvCard.vote_average" 
                    :overview="tvCard.overview"
                />
            </li>
            <!-- /tv card -->
        </ul>
        <!-- /lista tv -->
    </main>
</template>