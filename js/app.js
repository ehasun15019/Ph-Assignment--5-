/* like system start */
const heartCountElement = document.getElementById("heart_count");

// Load heart counts & status from localStorage
let heartCount = parseInt(localStorage.getItem("heartCount")) || 0;
let cardLiked = JSON.parse(localStorage.getItem("cardLiked")) || {};
heartCountElement.textContent = heartCount;

// Select all heart icons
const card_heart = document.querySelectorAll(".card_heart");

card_heart.forEach((heart, index) => {
  // giving unique card ID
  const cardId = index;

  // Set initial heart state using class
  if (cardLiked[cardId]) {
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid", "text-red-500");
  } else {
    heart.classList.add("fa-regular");
    heart.classList.remove("fa-solid", "text-red-500");
  }

  heart.addEventListener("click", function () {
    if (cardLiked[cardId]) {
      // Unlike
      cardLiked[cardId] = false;
      heartCount--;
      heart.classList.add("fa-regular");
      heart.classList.remove("fa-solid", "text-red-500");
    } else {
      // Like
      cardLiked[cardId] = true;
      heartCount++;
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid", "text-red-500");
    }

    // Update navbar and save to localStorage
    heartCountElement.textContent = heartCount;
    localStorage.setItem("heartCount", heartCount);
    localStorage.setItem("cardLiked", JSON.stringify(cardLiked));
  });
});
/* like system end */
