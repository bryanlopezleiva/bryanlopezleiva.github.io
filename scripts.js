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

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

const REAL_MADRID_JERSEY_IMAGE = "images/real_madrid.jpg";
const ARSENAL_JERSEY = "images/arsenal.jpg";
const ROMA_JERSEY = "images/real_madrid.jpg";
const ATLETICO_MADRID_JERSEY = "images/real_madrid.jpg";
const CELTIC_JERSEY = "images/real_madrid.jpg";
const BORUSSIA_DORTMUND_JERSEY = "images/real_madrid.jpg";
const INTERNAZIOLANE_JERSEY = "limages/real_madrid.jpg";

let soccer_titles = [
  "Real Madrid",
  "Arsenal",
  "Roma",
  "Atletico Madrid",
  "Celtic",
  "Borussia Dortmund",
  "Inter",
];

const CATEGORIES = [
  {
    id: "club-jerseys",
    name: "Club Jerseys",
    subcategories: [
      {
        id: "la-liga",
        name: "La Liga",
        jersey: [{ id: 1, team: "Real Madrid" }],
      },
      {
        id: "premier-league",
        name: "Premier League",
        jersey: [{ id: 1, team: "Arsenal" }],
      },
      { id: "serie-a", name: "Serie A" },
      { id: "bundesliga", name: "Bundesliga" },
    ],
  },
  {
    id: "national-team-jerseys",
    name: "National Team Jerseys",
    subcategories: [
      { id: "eruos-cup", name: "Euros Cup" },
      { id: "world-cup", name: "Wordl Cup" },
      { id: "afcon", name: "Africa Cup of Nations" },
    ],
  },
  {
    id: "vintage-jersey",
    name: "Vintage Jerseys",
  },
  {
    id: "exclusive-jerseys",
    name: "Exclusive jerseys",
  },
];

function showClubJerseys() {
  const container = document.getElementById("club-jerseys-container");
  container.innerHTML = ""; // Clear previous content

  // Loop through club jerseys data
  CATEGORIES.find(
    (category) => category.id === "club-jerseys"
  ).subcategories.forEach((subcategory) => {
    // Create subcategory title element
    const subcategoryTitle = document.createElement("h2");
    subcategoryTitle.textContent = subcategory.name;
    container.appendChild(subcategoryTitle);

    // Check if the subcategory has jerseys
    if (subcategory.jersey) {
      // Loop through jerseys in the subcategory
      subcategory.jersey.forEach((jersey) => {
        // Create card element
        const card = document.createElement("div");
        card.classList.add("card");

        // Create card content element
        const cardContent = document.createElement("div");
        cardContent.classList.add("club-jerseys-container");

        // Set jersey name as card title
        const title = document.createElement("h2");
        title.textContent = jersey.team;

        // Create image element
        const image = document.createElement("img");

        // Set image source based on team name
        switch (jersey.team) {
          case "Real Madrid":
            image.src = REAL_MADRID_JERSEY_IMAGE;
            break;
          case "Arsenal":
            image.src = ARSENAL_JERSEY;
            break;
          case "Roma":
            image.src = ROMA_JERSEY;
            break;
          // Add cases for other teams as needed
          default:
            // Default image URL if team not found
            image.src = "default_image.jpg";
        }
        image.alt = jersey.team + " Jersey Image";

        // Append title and image to card content
        cardContent.appendChild(title);
        cardContent.appendChild(image);

        // Append card content to card
        card.appendChild(cardContent);

        // Append card to container
        container.appendChild(card);
      });
    }
  });
}

// Call function to display club jerseys
document.addEventListener("DOMContentLoaded", function () {
  // Call the showClubJerseys function after the DOM is fully loaded
  showClubJerseys();
});

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
