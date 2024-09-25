// 내가 미리 해본 것

// const basketClickEl = document.querySelector('.basket-starter');
// const basketEl = document.querySelector('.basket');
// // const basketLink = document.querySelector('.basket_link');

// basketClickEl.addEventListener('click', function () {
//   console.log('작동');

//   if (basketEl.style.display === 'none') {
//     basketEl.style.display = 'block';
//   } else {
//     basketEl.style.display = 'none';
//   }
// });

// 장바구니

const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', function (event) {
  event.stopPropagation();
  if (basketEl.classList.contains('show')) {
    hideBasket();
  } else {
    showBasket();
  }
});

basketEl.addEventListener('click', function (event) {
  event.stopPropagation();
});

window.addEventListener('click', function () {
  hideBasket();
});

function showBasket() {
  basketEl.classList.add('show');
}

function hideBasket() {
  basketEl.classList.remove('show');
}

// 검색

const headerEl = document.querySelector('header');
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const shadowEl = searchWrapEl.querySelector('.shadow');

// searchStarterEl.addEventListener('click', function () {
//   showSearch();
// });

searchStarterEl.addEventListener('click', showSearch);

searchCloserEl.addEventListener('click', function () {
  hideSearch();
});

shadowEl.addEventListener('click', function () {
  hideSearch();
});

function showSearch() {
  headerEl.classList.add('searching');
}

function hideSearch() {
  headerEl.classList.remove('searching');
}
