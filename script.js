import { quotes } from "./quotes.js";

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
    const randomIndex = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[randomIndex];
  } while (randomQuote === currentQuote);

  currentQuote = randomQuote;

  quoteElement.textContent = randomQuote.text;
  authorElement.textContent = `- ${randomQuote.author}`;
  favouriteBtn.removeAttribute("disabled");

  updateFavouriteBtn();
  // authorElement.innerHTML = `<span>- ${randomQuote.author}</span>`;
};

const updateFavouriteBtn = () => {
  if (!currentQuote) return;

  favouriteBtn.textContent = currentQuote.isFavourite
    ? "Delete from favourite"
    : "Make favourite";
};

const toggleFavourite = () => {
  if (!currentQuote) return;

  currentQuote.isFavourite = !currentQuote.isFavourite;

  updateFavouriteBtn();

  renderFavourites();
};

const removeFromFavourites = (quote) => {
  quote.isFavourite = false;

  if (currentQuote === quote) {
    updateFavouriteBtn();
  }

  renderFavourites();
};

const renderFavourites = () => {
  favouritesContainer.innerHTML = "";

  const favourites = quotes.filter((quote) => quote.isFavourite);

  favourites.forEach((quote) => {
    const favouriteQuoteContainer = document.createElement("div");
    const deleteFavouriteBtn = document.createElement("button");
    deleteFavouriteBtn.textContent = "Delete";
    deleteFavouriteBtn.classList.add("delete-btn");

    favouriteQuoteContainer.classList.add("favourite-item");

    const quoteElement = document.createElement("p");
    const authorElement = document.createElement("p");

    quoteElement.textContent = `"${quote.text}"`;
    quoteElement.classList.add("favourite-quote-text");

    authorElement.textContent = `— ${quote.author}`;
    authorElement.classList.add("favourite-author-text");

    favouriteQuoteContainer.appendChild(quoteElement);
    favouriteQuoteContainer.appendChild(authorElement);
    favouriteQuoteContainer.appendChild(deleteFavouriteBtn);

    favouritesContainer.appendChild(favouriteQuoteContainer);

    deleteFavouriteBtn.addEventListener("click", () =>
      removeFromFavourites(quote),
    );
  });

  favouritesCount.textContent = `(${favourites.length})`;

  if (!favourites.length) {
    favouritesContainer.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📚</div><p class="empty-state-text">No favourite quotes yet</p><p class="empty-state-hint">Click the star button to add quotes here</p></div>`;
  }
};

generateBtn.addEventListener("click", generateRandomQuote);
favouriteBtn.addEventListener("click", toggleFavourite);
