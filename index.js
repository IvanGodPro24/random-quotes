import { initFavourites } from "./src/handlers/favouritesHandler.js";
import { handleQuote } from "./src/handlers/quotesHandler.js";

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", handleQuote);

initFavourites();
