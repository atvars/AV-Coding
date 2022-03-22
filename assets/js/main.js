// Automatic year update for footer
let date = new Date();
let year = date.getFullYear();
document.getElementById('footerDate').innerHTML = year;

// get my elements by id from my html
let showOffers = document.getElementById('offerButton');
let infoOffers = document.getElementById('offers');
let closeOffers = document.getElementById('closeOfferButton');

// set a default when page is loaded
// 1. offers is not visible
// 2. close offers button also is not visible
closeOffers.style.display = 'none';
infoOffers.style.display = 'none';

// create a function to open my offers and hide open button and show close button
function seeOffers() {
  infoOffers.style.display = 'block';
  showOffers.style.display = 'none';
  closeOffers.style.display = 'block';
}

// add a event listener " click " for the button to open offers
showOffers.addEventListener('click', seeOffers);

// hide offers with button click and hide close button and show again open offers button
function hideOffers() {
  infoOffers.style.display = 'none';
  showOffers.style.display = 'block';
  closeOffers.style.display = 'none';
}

// add event listener " click " for the button to hide my offers
closeOffers.addEventListener('click', hideOffers);
