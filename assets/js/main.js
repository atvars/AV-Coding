// Automatic year update for footer
let date = new Date();
let year = date.getFullYear();
document.getElementById('footerDate').innerHTML = year;

// show offers with button click
let showOffers = document.getElementById('offerButton');
let infoOffers = document.getElementById('offers');
let closeOffers = document.getElementById('closeOfferButton');

closeOffers.style.display = 'none';
infoOffers.style.display = 'none';

function seeOffers() {
  infoOffers.style.display = 'block';
  showOffers.style.display = 'none';
  closeOffers.style.display = 'block';
}
showOffers.addEventListener('click', seeOffers);

// hide offers with button click
function hideOffers() {
  infoOffers.style.display = 'none';
  showOffers.style.display = 'block';
  closeOffers.style.display = 'none';
}
closeOffers.addEventListener('click', hideOffers);
