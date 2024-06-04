//  STATE MANAGEMENT
import { reactive } from "vue";

export const store = reactive({
  // creo array vuoto dove inserire dati del server
  results: [],
  // creo oggetto con link per chiamata API

  // DESTRUTTURAZIONE apiUrl https://rickandmortyapi.com/api/character
  apiInfo: {
    url: "https://rickandmortyapi.com/api/",
    endpoints: {
      characters: "character",
    },
  },
});
