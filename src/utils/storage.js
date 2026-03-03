import { FAVOURITES } from "./storageKeys.js";

export const loadFromLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    console.error("Failed to load", error);
  }
};

export const saveInLocalStorage = (key, value) => {
  try {
    if (!key || value === undefined) {
      throw new Error("Key and value are required");
    }

    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to save:", error);
  }
};

export const addFavourite = (id) => {
  const ids = loadFromLocalStorage(FAVOURITES);

  if (!ids.includes(id)) ids.push(id);

  saveInLocalStorage(FAVOURITES, ids);
};

export const removeFavourite = (id) => {
  const ids = loadFromLocalStorage(FAVOURITES);

  const filteredIds = ids.filter((favId) => favId !== id);

  saveInLocalStorage(FAVOURITES, filteredIds);
};

export const loadFavourites = (quotes) => {
  try {
    const favouriteIds = loadFromLocalStorage(FAVOURITES);

    quotes.forEach((quote) => {
      quote.isFavourite = favouriteIds.includes(quote.id);
    });
  } catch (error) {
    console.error("Failed to load favourites:", error);
  }
};
