/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
const KIT_DATA = [
  { title: "Real Madrid", imageURL: "images/real_madrid.jpg" },
  { title: "Arsenal", imageURL: "images/arsenal.jpg" },
  { title: "Roma FC", imageURL: "images/roma.jpg" },
  { title: "Southampton", imageURL: "images/southampton.jpg" },
  { title: "Internazionale", imageURL: "images/inter.jpg" },
  { title: "Celtic", imageURL: "" },
  { title: "Borussia", imageURL: "" },
  { title: "Atletico Madrid", imageURL: "" },
];

const CATEGORIES = [
  {
    id: "club-kits",
    name: "Club Kits",
    subcategories: [
      {
        id: "la-liga",
        name: "La Liga",
        kit: [
          { id: 1, team: "Real Madrid" },
          { id: 2, team: "Atletico Madrid" },
        ],
      },
      {
        id: "premier-league",
        name: "Premier League",
        kit: [
          { id: 1, team: "Arsenal" },
          { id: 2, team: "Southampton" },
        ],
      },
      {
        id: "serie-a",
        name: "Serie A",
        kit: [
          { id: 1, team: "Roma FC" },
          { id: 2, team: "Internazionale" },
        ],
      },
      { id: "bundesliga", name: "Bundesliga", kit: [{}] },
    ],
  },
  {
    id: "national-team-kits",
    name: "National Team Kits",
    subcategories: [
      { id: "eruos-cup", name: "Euros Cup", kit: [{}] },
      { id: "world-cup", name: "Wordl Cup", kit: [{}] },
      { id: "afcon", name: "Africa Cup of Nations", kit: [{}] },
    ],
  },
  {
    id: "vintage-kits",
    name: "Vintage Kits",
    kit: [{}],
  },
  {
    id: "exclusive-kits",
    name: "Exclusive Kits",
    kit: [{}],
  },
];

function showClubKits() {
  const container = document.getElementById("club-kits-container");
  container.innerHTML = ""; // Clear previous content

  const templateCard = document.querySelector(".card");

  // Loop through each category in CATEGORIES
  for (let i = 0; i < CATEGORIES.length; i++) {
    const category = CATEGORIES[i];
    // Check if the category is "Club Kits"
    if (category.id === "club-kits") {
      const subcategories = category.subcategories;
      // Loop through subcategories within "Club Kits"
      for (let j = 0; j < subcategories.length; j++) {
        const subcategory = subcategories[j];
        // Create subcategory title element
        const subcategoryTitle = document.createElement("h2");
        subcategoryTitle.textContent = subcategory.name;
        container.appendChild(subcategoryTitle);

        // Loop through kits in the subcategory
        const kits = subcategory.kit;
        for (let k = 0; k < kits.length; k++) {
          const kit = kits[k];
          const imageURL = getImage(kit.team);
          const nextCard = createCard(templateCard, kit.team, imageURL);
          container.appendChild(nextCard);
        }
      }
      break; // Exit loop once "Club Kits" category is found
    }
  }
}

function getImage(team) {
  for (let i = 0; i < KIT_DATA.length; i++) {
    if (KIT_DATA[i].title === team) {
      return KIT_DATA[i].imageURL;
    }
  }
  ///returns undefined
  return;
}

function createCard(templateCard, titleInfo, imageURL) {
  const nextCard = templateCard.cloneNode(true);
  const card = document.createElement("div");
  card.classList.add("card");

  const cardContent = document.createElement("div");
  cardContent.classList.add("club-kits-container");

  const title = document.createElement("h2");
  title.textContent = titleInfo;

  const image = document.createElement("img");
  image.src = imageURL;
  image.alt = titleInfo + "Kit Image";

  cardContent.appendChild(title);
  cardContent.appendChild(image);
  card.appendChild(cardContent);

  return card;
}

// Call function to display club kits
document.addEventListener("DOMContentLoaded", showClubKits);
// Call the show kit function after the DOM is fully loaded
