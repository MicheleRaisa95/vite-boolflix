import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    data: [],
    meta: {},
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: 'ffacd612e4caaad22f69b22c85aa2b20'
});