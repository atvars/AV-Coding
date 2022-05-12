// Automatic year update for footer
let date = new Date();
let year = date.getFullYear();
document.getElementById('footerDate').innerHTML = year;

// get my elements by id from my html
let showOffers = document.getElementById('offerButton');
let infoOffers = document.getElementById('offers');

// set a default when page is loaded
// 1. offers is not visible
infoOffers.style.display = 'none';

// create a function to open my offers
function seeOffers() {
  infoOffers.style.display = 'block';
  showOffers.style.display = 'none';
}

// add a event listener " click " for the button to open offers
showOffers.addEventListener('click', seeOffers);
