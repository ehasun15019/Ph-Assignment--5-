/* call history working start */
const coin = document.getElementById("coin");
const call_btn = document.querySelectorAll(".call_btn");
const callHistoryBox = document.getElementById("history_list");

// function for call_history
function addCallHistory(serviceName, serviceNumber) {
  const entry = document.createElement("div");
  entry.classList.add(
    "history-entry",
    "flex",
    "justify-between",
    "p-2",
    "bg-gray-300"
  );

  entry.innerHTML = `
  <div class="flex">
    <p class="font-semibold">${serviceName}</p>
    <p>${serviceNumber}</p>

    <div>
      <p>Time</p>
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

    const currentCoins = parseInt(coin.innerText);

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
