/* card system created start */
const cards = [
  {
    id: 1,
    image: "./assets/emergency.png",
    title: "National Emergency Number",
    subtitle: "National Emergency",
    call_number: "999",
    definition: "All",
  },
  {
    id: 2,
    image: "./assets/police.png",
    title: "Police Helpline Number",
    subtitle: "Police",
    call_number: "999",
    definition: "Police",
  },
  {
    id: 3,
    image: "./assets/fire-service.png",
    title: "Fire Service Number",
    subtitle: "Fire Service",
    call_number: "999",
    definition: "Fire",
  },
  {
    id: 4,
    image: "./assets/ambulance.png",
    title: "Ambulance Service",
    subtitle: "Ambulance",
    call_number: "1994 - 999999",
    definition: "Health",
  },
  {
    id: 5,
    image: "./assets/emergency.png",
    title: "Women & Child Helpline",
    subtitle: "Women & Child Helpline",
    call_number: "109",
    definition: "Help",
  },
  {
    id: 6,
    image: "./assets/emergency.png",
    title: "Anti-Corruption Helpline",
    subtitle: "Anti-Corruption",
    call_number: "106",
    definition: "Govt",
  },
  {
    id: 7,
    image: "./assets/emergency.png",
    title: "Electricity Helpline",
    subtitle: "Electricity Outage",
    call_number: "16216",
    definition: "Electricity",
  },
  {
    id: 8,
    image: "./assets/emergency.png",
    title: "Brac Helpline",
    subtitle: "Brac",
    call_number: "16445",
    definition: "NGO",
  },
  {
    id: 9,
    image: "./assets/emergency.png",
    title: "Bangladesh Railway Helpline ",
    subtitle: "Bangladesh Railway",
    call_number: "163",
    definition: "Travel",
  },
];

const cardsContainer = document.getElementById("cards-container");

cards.forEach((card) => {
  const cardHTML = `
    <div class="card bg-base-100 shadow-sm p-5">
      <div class="flex justify-between items-center">
        <img src="${card.image}" alt="${card.title}" class="w-8 object-cover" />
        <i class="fa-regular fa-heart cursor-pointer text-gray-400"></i>
      </div>

      <div class="cards-body">
        <h2 class="card-title font-bold pt-3">${card.title}</h2>
        <p class="pt-1">${card.subtitle}</p>

        <div class="card-actions pt-4">
          <p class="text-[1.3rem] font-semibold">${card.call_number}</p>
        </div>

        <div class="badge badge-ghost bg-gray-200 p-4 rounded-full mt-1">${card.definition}</div>

        <div class="copy-section mt-4 flex justify-center gap-3 items-center">
          <button class="text-gray-400 px-10 py-[9px] border border-gray-400 cursor-pointer rounded-sm"><i class="fa-regular fa-copy"></i> copy</button>
          <button class="px-10 py-[10px] cursor-pointer rounded-sm bg-green-600 text-white"><i class="fa-solid fa-phone"></i> Call</button>
        </div>
      </div>
    </div>
  `;
  cardsContainer.innerHTML += cardHTML;
});

/* card system created end */
