const addCardBtn = document.getElementById("addCardBtn");
const cardContainer = document.getElementById("cardContainer");
const modal = document.getElementById("cardFormModal");
const saveCardBtn = document.getElementById("saveCard");
const closeModalBtn = document.getElementById("closeModal");
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");

let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

function renderCards() {
  cardContainer.innerHTML = "";
  flashcards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front">${card.question}</div>
        <div class="card-back">${card.answer}</div>
      </div>
    `;
    cardElement.addEventListener("click", () => {
      cardElement.classList.toggle("flipped");
    });
    cardContainer.appendChild(cardElement);
  });
}

addCardBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

saveCardBtn.addEventListener("click", () => {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();
  if(question && answer) {
    flashcards.push({ question, answer });
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
    renderCards();
    questionInput.value = "";
    answerInput.value = "";
    modal.classList.add("hidden");
  }
});

// Initial render
renderCards();
