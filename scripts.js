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

// Data for various kits, including title and image URL
const KIT_DATA = [
  { title: "Real Madrid", imageURL: "images/real_madrid.jpg" },
  { title: "Arsenal", imageURL: "images/arsenal.jpg" },
  { title: "Roma FC", imageURL: "images/roma.jpg" },
  { title: "Southampton", imageURL: "images/southampton.jpg" },
  { title: "Internazionale", imageURL: "images/inter.jpg" },
  { title: "Celtic", imageURL: "images/celtic.jpg" },
  { title: "Borussia", imageURL: "images/dortmund.jpg" },
  { title: "Real Betis", imageURL: "images/real_betis.jpg" },
  { title: "Retro Arsenal", imageURL: "images/retroA.jpg" },
  { title: "Spurs Retro", imageURL: "images/spursRetro" },
  { title: "Special Japan Kit", imageURL: "images/japan-excl.jpg" },
  { title: "Nigeria", imageURL: "images/nigeria.jpg" },
];

// Categories of kits with subcategories
const CATEGORIES = [
  {
    id: "club-kits",
    name: "Club Kits",
    // Subcategories for different leagues
    // Each containing kits for different teams
    subcategories: [
      {
        id: "la-liga",
        name: "La Liga",
        kit: [
          {
            id: 1,
            team: "Real Madrid",
            kitDescription:
              "The Real Madrid 2004/05 kit was a classic representation of the club's iconic colors and design elements. The jersey featured the traditional all-white base color that has long been associated with Real Madrid; the iconic all-white design with vertical stripes along the shoulders and upper arm adding subtle texture.",
          },
          {
            id: 2,
            team: "Real Betis",
            kitDescription:
              "The Real Betis retro jersey from 1995 showcases the team's traditional green and white colors. The jersey features a classic design with vertical stripes of a solid green base, accompanied by white trim. The club's crest being proudly displayed on the left chest, embodying the team's heritage and identity during that era.",
          },
        ],
      },
      {
        id: "premier-league",
        name: "Premier League",
        kit: [
          {
            id: 1,
            team: "Arsenal",
            kitDescription:
              "The Arsenal 2022 kit embodies the club's modern aesthetic, featuring the iconic red and white color scheme. Given its subtle patterns across a collar mainting a polished appearance for fans.",
          },
          {
            id: 2,
            team: "Southampton",
            kitDescription:
              "Southamptons 2022/23 brings back the style presented to many fans from the 80s! Drawing inspiration from that era, the shirt features the iconic red stripe down the middle along its crest and white stripes along the significant red stripe to make mark of the clubs color scheme.",
          },
        ],
      },
      {
        id: "serie-a",
        name: "Serie A",
        kit: [
          {
            id: 1,
            team: "Roma FC",
            kitDescription:
              "The Roma 2020-21 away kit departed from the club's traditional colors. The pale ivory color is a unique subtle color in touch with the maroon, yellow and red piping along the collar.",
          },
          {
            id: 2,
            team: "Internazionale",
            kitDescription:
              "The Inter Milan 2010 kit features the iconic black and blue stripes that are synonymous with the club. The kit feature the balck and blue stripes as it was worn during an era of great success for Inter Milan, including their historic treble-winning season under manager José Mourinho.",
          },
        ],
      },
      {
        id: "bundesliga",
        name: "Bundesliga",
        kit: [
          {
            id: 1,
            team: "Borussia",
            kitDescription:
              "The Borussia Dortmund 2014/15 away kit featured a primarily black color scheme with small yellow stripes, offering a sleek and dynamic design. The black base provided a bold backdrop for the vibrant yellow stripes, creating a visually striking contrast",
          },
        ],
      },
    ],
  },
  {
    id: "national-team-kits",
    name: "National Team Kits",
    kit: [
      {
        id: 1,
        team: "Nigeria",
        kitDescription:
          "The Nigeria 2018 kit gained widespread acclaim for its bold and vibrant design. Inspired by traditional Nigerian culture, the jersey featured an eye-catching pattern of green and white zigzags, paying homage to the country's agbada robes. The kit was celebrated for its unique aesthetic and cultural significance, quickly becoming one of the most sought-after jerseys of the 2018 FIFA World Cup.",
      },
    ],
  },
  {
    id: "vintage-kits",
    name: "Vintage Kits",
    kit: [
      {
        id: 1,
        team: "Celtic",
        kitDescription:
          "The Celtic 97/98 kit with a collar was a classic representation of the club's iconic green and tranparent hoop. The kit features a traditional collar design, adding a touch of retro elegance to the kit.",
      },
      {
        id: 2,
        team: "Retro Arsenal",
        kitDescription:
          "The Arsenal burgundy kit from 2005 was a memorable and distinctive departure from the traditional red and white colors. The kit features a deep burgundy base with little to no patterns making it very distinctive.",
      },
    ],
  },
  {
    id: "exclusive-kits",
    name: "Exclusive Kits",
    kit: [
      {
        id: 1,
        team: "Special Japan Kit",
        kitDescription:
          "The Japan x Nigo kit is a collaboration between the Japanese Football Association and renowned Japanese fashion designer Nigo. The kit offers a unique fusion of football culture and with Japanese culture embroidery.",
      },
    ],
  },
];

// Function to display club kits
function showClubKits() {
  // Get container element
  const container = document.getElementById("club-kits-container");
  container.innerHTML = ""; // Clear previous content

  //Get template card
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
        const subcategoryTitle = document.createElement("div");
        subcategoryTitle.textContent = subcategory.name;
        container.appendChild(subcategoryTitle);

        // Loop through kits in the subcategory
        const kits = subcategory.kit;
        for (let k = 0; k < kits.length; k++) {
          const kit = kits[k];

          // Get image URL for the kit

          const imageURL = getImage(kit.team);

          // Create card for the kit
          const nextCard = createCard(templateCard, kit.team, imageURL);
          container.appendChild(nextCard);

          // Add kit description
          const additionalText = document.createElement("p");
          additionalText.textContent = kit.kitDescription;
          container.appendChild(additionalText);
        }
      }
      break; // Exit loop once "Club Kits" category is found
    }
  }
}

// Function to display vintage kits
function showVintageKits() {
  // Similar to showClubKits, but for vintage kits

  const container = document.getElementById("vintage-container");
  container.innerHTML = ""; // Clear previous content

  const templateCard = document.querySelector(".card");

  let vintCat;
  for (let i = 0; i < CATEGORIES.length; i++) {
    if (CATEGORIES[i].id === "vintage-kits") {
      vintCat = CATEGORIES[i];
      break;
    }
  }

  if (vintCat) {
    const vintageKit = vintCat.kit;

    for (let i = 0; i < vintageKit.length; i++) {
      const kit = vintageKit[i];
      const imageURL = getImage(kit.team);
      const nextCard = createCard(templateCard, kit.team, imageURL);
      container.appendChild(nextCard);

      // Add kit description
      const additionalText = document.createElement("p");
      additionalText.textContent = kit.kitDescription;
      container.appendChild(additionalText);
    }
  } else {
    return;
  }
}

function showNationalKits() {
  const container = document.getElementById("national-team-container");
  container.innerHTML = ""; // Clear previous content

  const templateCard = document.querySelector(".card");

  let nationalCat;
  for (let i = 0; i < CATEGORIES.length; i++) {
    if (CATEGORIES[i].id === "national-team-kits") {
      nationalCat = CATEGORIES[i];
      break;
    }
  }

  if (nationalCat) {
    const nationalKit = nationalCat.kit;

    for (let i = 0; i < nationalKit.length; i++) {
      const kit = nationalKit[i];
      const imageURL = getImage(kit.team);
      const nextCard = createCard(templateCard, kit.team, imageURL);
      container.appendChild(nextCard);

      // Add kit description
      const additionalText = document.createElement("p");
      additionalText.textContent = kit.kitDescription;
      container.appendChild(additionalText);
    }
  } else {
    return;
  }
}

function showExclusiveKits() {
  const container = document.getElementById("exclusive-container");
  container.innerHTML = ""; // Clear previous content

  const templateCard = document.querySelector(".card");

  let exclusiveCat;
  for (let i = 0; i < CATEGORIES.length; i++) {
    if (CATEGORIES[i].id === "exclusive-kits") {
      exclusiveCat = CATEGORIES[i];
      break;
    }
  }

  if (exclusiveCat) {
    const exclusiveKit = exclusiveCat.kit;

    for (let i = 0; i < exclusiveKit.length; i++) {
      const kit = exclusiveKit[i];
      const imageURL = getImage(kit.team);
      const nextCard = createCard(templateCard, kit.team, imageURL);
      container.appendChild(nextCard);

      // Add kit description
      const additionalText = document.createElement("p");
      additionalText.textContent = kit.kitDescription;
      container.appendChild(additionalText);
    }
  } else {
    return;
  }
}

// Function to get image URL for a team
function getImage(team) {
  for (let i = 0; i < KIT_DATA.length; i++) {
    if (KIT_DATA[i].title === team) {
      return KIT_DATA[i].imageURL;
    }
  }
  ///returns undefined
  return;
}

// Function to create a card element
function createCard(templateCard, titleInfo, imageURL) {
  // Clone template card and create card elements
  const nextCard = templateCard.cloneNode(true);
  const card = document.createElement("div");
  card.classList.add("card");

  const cardContent = document.createElement("div");
  cardContent.classList.add("club-kits-container");
  cardContent.classList.add("national-team-container");
  cardContent.classList.add("vintage-container");
  cardContent.classList.add("exclusive-container");

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

// Function to filter/search kits
function searchFunction() {
  // Get search input value
  // Loop through cards and show/hide based on search text
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    if (text.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Event listener to call functions when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  showClubKits();
  showVintageKits();
  showNationalKits();
  showExclusiveKits();
});
