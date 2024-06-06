<script>
export default {
    props: [
        "titolo",
        "titoloOriginale",
        "lingua",
        "voto",

    ]
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
    </div>
</template>