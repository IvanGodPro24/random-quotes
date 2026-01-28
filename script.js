import { quotes } from "./quotes.js";

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");

const generateRandomQuote = () => {
  let randomQuote;

  do {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[randomIndex];
  } while (randomQuote.text === quoteElement.textContent);

  quoteElement.textContent = randomQuote.text;
  authorElement.textContent = `- ${randomQuote.author}`;
  // authorElement.innerHTML = `<span>- ${randomQuote.author}</span>`;
};

generateBtn.addEventListener("click", generateRandomQuote);
