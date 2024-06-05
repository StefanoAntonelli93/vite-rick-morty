//  STATE MANAGEMENT
import { reactive } from "vue";

export const store = reactive({
  // creo array vuoto dove inserire dati del server
  results: [],
  // creo oggetto con link per chiamata API
  loading: true,

  // DESTRUTTURAZIONE apiUrl https://rickandmortyapi.com/api/character
  apiInfo: {
    url: "https://rickandmortyapi.com/api/",
    endpoints: {
      characters: "character",
      name: "?name=",
    },
  },
});
