import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    data: [],
    meta: {},
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: 'ffacd612e4caaad22f69b22c85aa2b20',
    searchQuery: '',
});

// Funzione che esegue la chiamata 
export function fetchData(query = '') {
    const searchQuery = query || store.searchQuery;
    console.log('Chiamata API in corso');
    axios.get(`${store.apiUrl}?api_key=${store.apiKey}&query=${searchQuery}&language=it-IT`)
        .then(response => {
            console.log('Risposta dalla chiamata API:', response.data);
            store.data = response.data.results;
            store.meta = response.data.info;
            console.log('Dati assegnati correttamente:', store.data);
        })
        .catch(error => {
            console.error('Errore durante la chiamata API:', error);
        });
}

