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

/* call history working start */
const coin = document.getElementById("coin");
const call_btn = document.querySelectorAll(".call_btn");
const callHistoryBox = document.getElementById("history_list");

// function for call_history
function addCallHistory(serviceName, serviceNumber) {
  const entry = document.createElement("div");
  entry.classList.add("history-entry", "flex", "p-2", "bg-gray-100", "mt-2");

  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  entry.innerHTML = `
  <div class="flex justify-between items-center px-2 rounded-full w-full">
   <div class="flex flex-col">
     <p class="font-semibold text-[0.8rem]">${serviceName}</p>
     <p>${serviceNumber}</p>
   </div>

   <div>
     <p class="text-[0.9rem]">${time}</p>
   </div>
  </div>
  `;

  callHistoryBox.appendChild(entry);
}

// addEventListener for every call_btn
call_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const serviceName = card.querySelector("h2").innerText;
    const serviceNumber = card.querySelector(".card-actions p").innerText;

    let currentCoins = parseInt(coin.innerText);

    if (currentCoins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    currentCoins = currentCoins - 20;
    coin.innerText = currentCoins;

    alert(`Calling ${serviceName} at ${serviceNumber}`);
    addCallHistory(serviceName, serviceNumber);
  });
});

// clear btn Functionality
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  callHistoryBox.innerHTML = "";
});
/* call history working end */
