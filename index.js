import { quotes } from "./src/data/quotes.js";
import { initFavourites } from "./src/handlers/favouritesHandler.js";
import { applyQuote, handleQuote } from "./src/handlers/quotesHandler.js";
import { loadFromLocalStorage } from "./src/utils/storage.js";
import { CURRENT_QUOTE } from "./src/utils/storageKeys.js";

const generateBtn = document.getElementById("generate-btn");

initFavourites(quotes);

const storedQuote = loadFromLocalStorage(CURRENT_QUOTE);

if (storedQuote) {
  const realQuote = quotes.find((q) => q.id === storedQuote.id);
  applyQuote(realQuote);
}

generateBtn.addEventListener("click", () => handleQuote(quotes));
