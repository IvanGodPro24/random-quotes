import { FAVOURITES } from "./storageKeys.js";

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
