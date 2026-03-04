import { updateFavouriteBtn } from "./favouritesHandler.js";
import { generateRandomNumber } from "../utils/math.js";
import { getCurrentQuote, setCurrentQuote } from "../state.js";
import { isFavouriteId, saveCurrentQuoteId } from "../utils/storage.js";

export const showQuote = () => {
  const currentQuote = getCurrentQuote();

  if (!currentQuote) return;

  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  quoteElement.textContent = currentQuote.text;
  authorElement.textContent = `- ${currentQuote.author}`;

  updateFavouriteBtn({ isFavourite: isFavouriteId(currentQuote.id) });
};

export const applyQuote = (quote) => {
  if (!quote) return;

  setCurrentQuote(quote);

  saveCurrentQuoteId(quote.id);

  showQuote();
};

export const generateRandomQuote = (quotes) => {
  const currentQuote = getCurrentQuote();
  let randomQuote;

  do {
    const randomIndex = generateRandomNumber(quotes.length);
    randomQuote = quotes[randomIndex];
  } while (randomQuote === currentQuote);

  return randomQuote;
};

export const handleQuote = (quotes) => {
  const randomQuote = generateRandomQuote(quotes);

  applyQuote(randomQuote);
};
