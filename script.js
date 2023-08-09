document.addEventListener("DOMContentLoaded", function () {
  const inputSentence = document.getElementById("inputSentence");
  const searchButton = document.getElementById("searchButton");
  const results = document.getElementById("results");

  searchButton.addEventListener("click", function () {
    const userInput = inputSentence.value;
    const similarSentences = searchSimilarSentences(userInput);
    displayResults(similarSentences);
  });

  function searchSimilarSentences(input) {
    // Implement your similarity calculation logic here
    // Return an array of similar sentences
    // For this example, let's assume some dummy data
    return [
      "In the name of Allah, the Most Gracious, the Most Merciful.",
      "Praise be to Allah, the Lord of all the worlds.",
      // ... other similar sentences
    ];
  }

  function displayResults(sentences) {
    results.innerHTML = "";
    sentences.forEach((sentence) => {
      const sentenceDiv = document.createElement("div");
      sentenceDiv.className = "sentence";
      sentenceDiv.textContent = sentence;
      results.appendChild(sentenceDiv);
    });
  }
});
