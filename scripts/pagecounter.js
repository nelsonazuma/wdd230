 let visitCount = localStorage.getItem('visitCount') || 0;
 visitCount = parseInt(visitCount) + 1;
 localStorage.setItem('visitCount', visitCount);

 // Display the visit count on the page
 const visitCounterElement = document.querySelector('.visit-counter');
 if (visitCounterElement) {
     visitCounterElement.textContent = `Page Visits: ${visitCount}`;
 }