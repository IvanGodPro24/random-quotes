import { quotes } from "./src/data/quotes.js";
import { initFavourites } from "./src/handlers/favouritesHandler.js";
import { applyQuote, handleQuote } from "./src/handlers/quotesHandler.js";

const generateBtn = document.getElementById("generate-btn");

initFavourites(quotes);

const storedQuote = JSON.parse(localStorage.getItem("currentQuote"));

if (storedQuote) {
  const realQuote = quotes.find((q) => q.id === storedQuote.id);
  applyQuote(realQuote);
}

generateBtn.addEventListener("click", () => handleQuote(quotes));
