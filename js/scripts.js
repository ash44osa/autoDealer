// Import reviews data
import { reviews } from "../data/reviews.js";
console.log(reviews);

// Target parent container
const myTarget = document.querySelector("#parent");

// Loop through reviews and create elements dynamically
for (let x = 0; x < reviews.length; x++) {
  console.log(reviews[x].text);

  // Create the main card container (section)
  const mySection = document.createElement("section");
  mySection.classList.add("review-card"); // Add class for styling

  // Create review text (h2)
  const myReview = document.createElement("h2");
  myReview.textContent = reviews[x].text;

  // Create reviewer info (p)
  const myInfo = document.createElement("p");
  myInfo.textContent = `Reviewer: ${reviews[x].name}`;

  // Create rating container (div)
  const myRating = document.createElement("div");
  myRating.classList.add("rating-container"); // Add class for styling

  // Generate stars (tiresvg.svg) based on review rating
  for (let i = 0; i < reviews[x].stars; i++) {
    const genIndicator = document.createElement("img");
    genIndicator.src = "./images/starsvg.svg";
    genIndicator.alt = "star rating"; // Accessibility
    genIndicator.classList.add("rating-icon"); // Add class for styling
    myRating.appendChild(genIndicator);
  }

  // Append elements to section
  mySection.appendChild(myInfo);
  mySection.appendChild(myRating);
  mySection.appendChild(myReview);

  // Append section to parent container
  myTarget.appendChild(mySection);
}
// Create the main card container (section)
const mySection = document.createElement("section");
mySection.classList.add("review-card"); //
// Navigation toggle logic
const navElement = document.querySelector("#theNav");
const btnElement = document.querySelector("#theButton");

btnElement.addEventListener("click", () => {
  btnElement.classList.toggle("open");
  navElement.classList.toggle("open");
});
