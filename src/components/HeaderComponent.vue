<script>
import {  store } from "../store";

export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <header>
        <!-- input -->
        <input type="text" id="search" placeholder="Cerca film" v-model="store.apiParams.apiQuery" />
        <!-- /input -->

        <!-- button -->
        <button @click="$emit('ricerca')">cerca</button>
    </header>
</template>