import { CURRENT_QUOTE, FAVOURITES } from "./storageKeys.js";

export const saveFavourites = (quotes) => {
  try {
    const favouriteIds = quotes
      .filter((quote) => quote.isFavourite)
      .map((favQ) => favQ.id);

    localStorage.setItem(FAVOURITES, JSON.stringify(favouriteIds));
  } catch (error) {
    console.error("Failed to save favourites", error);
  }
};

export const loadFavourites = (quotes) => {
  try {
    const favouriteIds = JSON.parse(localStorage.getItem(FAVOURITES)) || [];

    quotes.forEach((quote) => {
      quote.isFavourite = favouriteIds.includes(quote.id);
    });
  } catch (error) {
    console.error("Failed to load favourites:", error);
  }
};

export const saveCurrentQuote = (quote) => {
  try {
    localStorage.setItem(CURRENT_QUOTE, JSON.stringify(quote));
  } catch (error) {
    console.error("Failed to save current quote", error);
  }
};

export const loadCurrentQuote = () => {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_QUOTE));
  } catch (error) {
    console.error("Failed to load current quote", error);
  }
};
