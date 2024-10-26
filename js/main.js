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
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')];
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const shadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelaysEls = [...searchWrapEl.querySelectorAll('li')];

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
  // html 태그 찾기

  document.documentElement.classList.add('fixed');

  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.4) / headerMenuEls.length + 's';
  });

  searchDelaysEls.forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.4) / searchDelaysEls.length + 's';
  });
  setTimeout(function () {
    searchInputEl.focus();
  }, 600);
}

function hideSearch() {
  headerEl.classList.remove('searching');
  // html 태그 찾기
  document.documentElement.classList.remove('fixed');

  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.4) / headerMenuEls.length + 's';
  });
  searchDelaysEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.4) / searchDelaysEls.length + 's';
  });
  searchDelaysEls.reverse();
  searchInputEl.value = '';
}

// 요소의 가시성 관찰
const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('show');
  });
});

const infoEls = document.querySelectorAll('.info');
infoEls.forEach(function (el) {
  io.observe(el);
});

// 비디오 재생
const video = document.querySelector('.stage video');
const playBtn = document.querySelector('.stage .controller--play');
const pauseBtn = document.querySelector('.stage .controller--pause');

playBtn.addEventListener('click', function () {
  video.play();
  playBtn.classList.add('hide');
  pauseBtn.classList.remove('hide');
});
pauseBtn.addEventListener('click', function () {
  video.pause();
  pauseBtn.classList.add('hide');
  playBtn.classList.remove('hide');
});
