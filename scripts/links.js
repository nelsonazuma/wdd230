const baseURL = "https://nelsonazuma.github.io/wdd230/";
const linksURL = `${baseURL}/data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    // Get the existing HTML element where we will insert the dynamic links
    const linksContainer = document.querySelector("#links-container");

    // Create a new empty element to hold the dynamic links
    const linksList = document.createElement("ul");

    // Loop through each week and create a link for each activity
    for (const week of weeks) {
        const weekHeading = document.createElement("h3");
        weekHeading.textContent = week.week;
        linksList.appendChild(weekHeading);

        for (const link of week.links) {
            const linkItem = document.createElement("li");
            const linkAnchor = document.createElement("a");
            linkAnchor.href = baseURL + link.url;
            linkAnchor.textContent = link.title;
            linkItem.appendChild(linkAnchor);
            linksList.appendChild(linkItem);
        }
    }

    // Clear the existing links container
    linksContainer.innerHTML = "";

    // Append the new links list to the container
    linksContainer.appendChild(linksList);
}

// Get the links data
getLinks();