const elUrlShortener = document.querySelector('.js-url-shortener');
const elUrlShortenerForm = document.querySelector('.js-url-shortener__form');
const elUrlShortnerResults = document.querySelector('.url-shortener__results');
const elCopyUrlShortLink = document.querySelector('.js-url-shortener__copy-button');

if (elUrlShortenerForm) {
  elUrlShortenerForm.addEventListener('submit' , function (evt) {
    evt.preventDefault();

    elUrlShortnerResults.classList.add('url-shortener__results--open');
  })
};

if (elUrlShortener) {
  elUrlShortener.addEventListener('click', function (evt) {
    if (evt.target.matches('.js-url-shortener__copy-button')) {
      //Change buttuon text
      evt.target.textContent = 'Copied!';

      //Change button bgcolor
      evt.target.classList.add('url-shortener__copy-button--copied');

      // Copy short link to clipboard
      navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);


      // Reset button text and class after 1 second
      setTimeout(function() {
        evt.target.textContent = 'Copy';
        evt.target.classList.remove('url-shortener__copy-button--copied');
      }, 3000);
    };
  })
}
