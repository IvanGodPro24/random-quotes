import { quotes } from "./src/quotes.js";
import {
  updateFavouriteBtn,
  renderFavourites,
} from "./src/favouritesHandler.js";
import { generateRandomNumber } from "./src/utils/math.js";

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const favouriteBtn = document.getElementById("favourite-btn");
const favouritesContainer = document.getElementById("favourites-container");
const favouritesCount = document.querySelector(".favourites-count");

let currentQuote = null;

const generateRandomQuote = () => {
  let randomQuote;

  do {
    const randomIndex = generateRandomNumber(quotes.length);
    randomQuote = quotes[randomIndex];
  } while (randomQuote === currentQuote);

  currentQuote = randomQuote;

  quoteElement.textContent = randomQuote.text;
  authorElement.textContent = `- ${randomQuote.author}`;
  favouriteBtn.removeAttribute("disabled");

  updateFavouriteBtn(currentQuote, favouriteBtn);
  // authorElement.innerHTML = `<span>- ${randomQuote.author}</span>`;
};

const toggleFavourite = () => {
  if (!currentQuote) return;

  currentQuote.isFavourite = !currentQuote.isFavourite;

  updateFavouriteBtn(currentQuote, favouriteBtn);

  renderFavourites(
    quotes,
    favouritesContainer,
    favouritesCount,
    currentQuote,
    favouriteBtn,
  );
};

generateBtn.addEventListener("click", generateRandomQuote);
favouriteBtn.addEventListener("click", toggleFavourite);
