// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Set the copyright year in the footer
document.querySelector('footer p').textContent = `© ${currentYear} Nelson Azumah. Accra, Ghana.`;

// Set the last modified date in the footer
document.querySelector('#lastModified').textContent = `Last modified: ${lastModifiedDate}.`;
