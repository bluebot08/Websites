const quoteEl = document.getElementById("quote");
const quoteBtn = document.getElementById("quoteBtn");

quoteBtn.addEventListener("click", generateQuote);

generateQuote();

// Using ASYNC/AWAIT
async function generateQuote() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://www.affirmations.dev", config);

  const data = await res.json();
  quoteEl.innerHTML = data.quote;
}
