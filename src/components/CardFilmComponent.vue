<script>
export default {
    props: [
        "copertina",
        "titolo",
        "titoloOriginale",
        "lingua",
        "voto",

    ],
    data() {
        return {
            bandieraItalia: "src/assets/img/bandiera-italia.png",
            bandierauk: "src/assets/img/bandiera-uk.webp",
            imgBaseUrl: "https://image.tmdb.org/t/p/w342",
        };
    },
}
</script>

<template>
    <!-- copertina -->
    <div>
        <img v-if="imgBaseUrl + copertina !== 'https://image.tmdb.org/t/p/w342null'" :src="imgBaseUrl + copertina" :alt="titolo">
    </div>
    <!-- copertina -->
    <div>
        <div>
            <h2>
                {{ titolo }}
            </h2>
        </div>

        <div v-show="titolo !== titoloOriginale">
            <h2>
                {{ titoloOriginale }}
            </h2>
        </div>
        <!-- lingua -->
        <div>
            <!-- bandiera -->
        <div>
            <img v-if="lingua === 'it'" :src="bandieraItalia" alt="bandiera italiana">

            <img v-else-if="lingua === 'en'" :src="bandierauk" alt="bandiera uk">

            <h2 v-else>{{ lingua }}</h2>


        </div>
        </div>
        <!-- /lingua -->
        <div>
            <h2>
                {{ voto }}
            </h2>
        </div>
    </div>
</template>