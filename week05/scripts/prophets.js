const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();

  displayProphets(data.prophets);
}

function displayProphets(prophets) {
  prophets.forEach(prophet => {
    const card = document.createElement('section');
    card.classList.add('card');

    const fullName = document.createElement('h2');
    const birthDate = document.createElement('p');
    const birthPlace = document.createElement('p');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    const portrait = document.createElement('img');
    portrait.src = prophet.imageurl;
    portrait.alt = prophet.name;
    portrait.loading = 'lazy';
    portrait.width = 200;
    portrait.height = 200;

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}

getProphetData();