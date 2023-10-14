// Get the current date
const currentDate = new Date();

// Get the last visit date from localStorage or set it to the current date if it doesn't exist
let lastVisit = localStorage.getItem("lastVisit");
if (!lastVisit) {
  localStorage.setItem("lastVisit", currentDate);
  lastVisit = currentDate;
} else {
  lastVisit = new Date(lastVisit);
}

// Calculate the time difference in days
const timeDifferenceInMilliseconds = currentDate - lastVisit;
const timeDifferenceInDays = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));

// Select the sidebar content element
const sidebarContent = document.getElementById("visit_messages");

// Create and display messages based on the time difference
if (timeDifferenceInDays === 0) {
  // First visit
  const welcomeMessage = document.createElement("h2");
  welcomeMessage.textContent = "Welcome! Let us know if you have any questions.";
  sidebarContent.appendChild(welcomeMessage);
} else if (timeDifferenceInDays < 1) {
  // Less than a day
  const soonMessage = document.createElement("h2");
  soonMessage.textContent = "Back so soon! Awesome!";
  sidebarContent.appendChild(soonMessage);
} else {
  // More than a day
  const lastVisitedMessage = document.createElement("h2");
  const daysText = timeDifferenceInDays === 1 ? "day" : "days";
  lastVisitedMessage.textContent = `You last visited ${timeDifferenceInDays} ${daysText} ago.`;
  sidebarContent.appendChild(lastVisitedMessage);
}
