<script>
export default {
    props: [
        "titolo",
        "titoloOriginale",
        "lingua",
        "voto",

    ],
    data() {
        return {
            bandieraItalia: "src/assets/img/bandiera-italia.png",
            bandierauk: "src/assets/img/bandiera-uk.webp"
        }
    }
}
</script>

<template>
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
            <img v-if="lingua === 'it-It'" :src="bandieraItalia" alt="bandiera italiana">

            <img v-if="lingua === 'en'" :src="bandierauk" alt="bandiera uk">

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