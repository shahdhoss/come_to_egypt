document.querySelector('.search-btn').addEventListener('click', function() {
  let city = document.querySelector('#search-input').value.toLowerCase();
  const destinationDetails = document.getElementById('destination-details');
  const cards = destinationDetails.querySelectorAll('.card');
  
  cards.forEach(card => {
    const cityName = card.getAttribute('data-city').toLowerCase();
    if (cityName.includes(city)) {
      card.style.display = 'block'; 
    } else {
      card.style.display = 'none'; 
    }
  });
});


document.querySelector('.reset-btn').addEventListener('click', function() {
  document.querySelector('#search-input').value = '';
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.display = 'block'; 
  });
});


document.querySelectorAll('.show-more-btn').forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.card');
    const extraDetails = card.querySelector('.extra-details');
    
   
    if (extraDetails.style.display === 'block') {
      extraDetails.style.display = 'none';
      this.textContent = 'Show More';
    } else {
      extraDetails.style.display = 'block';
      this.textContent = 'Show Less';
    }
  });
});
