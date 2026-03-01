export const saveFavourites = (quotes) => {
  const favouriteIds = quotes
    .filter((quote) => quote.isFavourite)
    .map((favQ) => favQ.id);

  localStorage.setItem("favourites", JSON.stringify(favouriteIds));
};

export const loadFavourites = (quotes) => {
  try {
    const favouriteIds = JSON.parse(localStorage.getItem("favourites")) || [];

    quotes.forEach((quote) => {
      quote.isFavourite = favouriteIds.includes(quote.id);
    });
  } catch (error) {
    console.error("Failed to load favourites:", error);
  }
};
