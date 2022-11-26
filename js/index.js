const elUrlShortenerForm = document.querySelector('.js-url-shortener__form');
const elUrlShortnerResults = document.querySelector('.url-shortener__results');

elUrlShortenerForm.addEventListener('submit' , function (evt) {
  evt.preventDefault();

  elUrlShortnerResults.classList.add('url-shortener__results--open');
})