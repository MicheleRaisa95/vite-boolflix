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
            votoDecimi: this.voto
        };
    },
    computed: {
        nuovoVoto() {
            const votoDimezzato = this.votoDecimi / 2;
            return Math.ceil(votoDimezzato);
        },
        stelleVuote() {
            return 5 - this.nuovoVoto;
        }
    }
};
</script>

<template>
    <div class="border-0 rounded-3 card">
        <!-- copertina -->
        <div class="poster">
            <img v-if="imgBaseUrl + copertina !== 'https://image.tmdb.org/t/p/w342null'" 
            :src="imgBaseUrl + copertina"
            :alt="titolo">
            <font-awesome-icon v-else class="img-copertina" icon="fa-solid fa-film" />
        </div>
        <!-- /copertina -->

        <!-- titolo -->
        <div class="p-3 info-card">
            <div>
                <h4 class="mb-0">Titolo:</h4>
                <h5>{{ titolo }}</h5>
            </div>
            <!-- /titolo -->

            <!-- titolo originale -->
            <div v-show="titolo !== titoloOriginale">
                <h4 class="mb-0">Titolo Originale:</h4>
                <h5>{{ titoloOriginale }}</h5>
            </div>
            <!-- /titolo originale  -->
        </div>
        <!-- lingua -->
        <div>
            <div>
                <h4 class="mb-0">Lingua:</h4>
                <img v-if="lingua === 'it'" :src="bandieraItalia" alt="bandiera italiana">
                <img v-else-if="lingua === 'en'" :src="bandierauk" alt="bandiera UK">
                <h4 v-else>{{ lingua }}</h4>
            </div>
        </div>

        <!-- voto -->
        <div>
            <!-- stelle piene -->
            <font-awesome-icon v-for="n in nuovoVoto" :key="'filled-' + n" :icon="['fas', 'star']" />
            <!-- stelle vuote -->
            <font-awesome-icon v-for="n in stelleVuote" :key="'empty-' + n" :icon="['far', 'star']" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    position: relative;
    width: 342px;
    height: 500px;
    overflow: hidden;

    .poster {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

.info-card {
    opacity: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8169468470982143);
    position: absolute;
    color: rgb(222, 222, 222);
    z-index: 5;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        opacity: 1;
    }
}

h4 {
    color: rgb(129, 129, 129);
}
</style>