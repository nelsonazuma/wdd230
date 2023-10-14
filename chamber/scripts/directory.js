// Get the member data from the JSON file
const memberData = async () => {
    const response = await fetch('data/members.json');
    const data = await response.json();
    return data;
  };
  
  // Render the member list
  const renderMemberList = (memberData) => {
    const memberList = document.querySelector('#member-list');
  
    // Create a card for each member
    memberData.forEach((member) => {
      const card = document.createElement('div');
      card.classList.add('directory-card');
  
      // Add the member's data
      const name = document.createElement('h3');
      name.textContent = member.name;
      card.appendChild(name);
  
      const address = document.createElement('p');
      address.textContent = member.address;
      card.appendChild(address);
  
      const phone = document.createElement('p');
      phone.textContent = member.phone;
      card.appendChild(phone);
  
      // Add the card to the member list
      memberList.appendChild(card);
    });
  };
  
  // Get the member data and render the member list
  window.addEventListener('load', async () => {
    const memberData = await memberData();
    renderMemberList(memberData);
  });
  