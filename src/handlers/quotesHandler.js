import { quotes } from "../data/quotes.js";
import { updateFavouriteBtn } from "./favouritesHandler.js";
import { generateRandomNumber } from "../utils/math.js";
import { getCurrentQuote, setCurrentQuote } from "../state.js";

export const showQuote = () => {
  const currentQuote = getCurrentQuote();
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  quoteElement.textContent = currentQuote.text;
  authorElement.textContent = `- ${currentQuote.author}`;

  updateFavouriteBtn(currentQuote);
};

export const generateRandomQuote = () => {
  const currentQuote = getCurrentQuote();
  let randomQuote;

  do {
    const randomIndex = generateRandomNumber(quotes.length);
    randomQuote = quotes[randomIndex];
  } while (randomQuote === currentQuote);

  return randomQuote;
};

export const handleQuote = () => {
  const randomQuote = generateRandomQuote();

  setCurrentQuote(randomQuote);

  showQuote();
};
