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
    <header class="p-4 d-flex justify-content-between align-items-center">
        <!-- logo -->
        <div class="d-flex align-items-center">
            <div class="logo">
                <img class="logo-img" src="../assets/img/logo-boolflix.jpeg" alt="logo">
            </div>
            <h1 class="m-0 d-none d-md-block mr-color-red">Boolflix</h1>
        </div>
        <!-- /logo -->

        <div class="right d-flex align-items-center gap-3">
            <!-- input -->
            <div class="form-floating">
                <input type="text" id="search" placeholder="Cerca film o serie tv" v-model="store.apiParams.apiQuery" />
                
            </div>
            <!-- /input -->
        </div>

        <!-- button -->
        <button class="btn btn-danger p-3" @click="$emit('ricerca')">cerca</button>
    </header>
</template>