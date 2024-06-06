import { reactive } from 'vue';


export const store = reactive({
movies: {
    filmCard: [],
    type: "movie",
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
},

tvShow: {
    cardTv: [],
    type: "tv",
    apiTv: "https://api.themoviedb.org/3/search/tv",
},

apiParams: {
    region: "Ital",
    apiKey: "ffacd612e4caaad22f69b22c85aa2b20",
    language: "it-IT",
    apiQuery: "",
},
});


