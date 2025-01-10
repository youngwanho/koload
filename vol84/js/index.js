/* 2024년도 메인페이지 */
$(function() {
    if(location.pathname.includes('sub') || location.pathname.includes('list')) {
      return false
    };

    coverTextAnimation();
    setSwiper();

  // 이벤트리스너
});

/* 2024년도 서브페이지 */
$(function() {
  if(!location.pathname.includes('sub') || location.pathname.includes('list')) {
    return false;
  }

  addSubTopGap();

  // 이벤트리스너
  $(window).on('resize', addSubTopGap);
});

// functions
// 스와이퍼 세팅
function setSwiper() {
  // 약속으로 파트 슬라이드
  // 스와이퍼 인스턴스 생성
  const promiseSlide = new Swiper(".section-promise .promise-slider", {
    slidesPerView: 3.5,
    autoplay: {
      delay: 3000,
    },
    loopedSlides: 7,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".section-promise .swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
      },
    },
    breakpoints: {
      // when window width is >= 1440px
      1440: {
        slidesPerView: 3.5,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      475: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      279: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
    }
  });

  $('.section-promise .swiper-btns .prev').on('click', () => promiseSlide.slidePrev());
  $('.section-promise .swiper-btns .next').on('click', () => promiseSlide.slideNext());
  
  // 안전으로 축제
  const festivalSlide = new Swiper(".section-safe .safe-festival", {
    slidesPerView: 4,
    autoplay: {
      delay: 3000,
    },
    loopedSlides: 8,
    spaceBetween: 20,
    loop: true,
  });

  $('.safe-festival .swiper-btns .prev').on('click', () => safeSlide.slidePrev());
  $('.safe-festival .swiper-btns .next').on('click', () => safeSlide.slideNext());

  // 안전으로 파트 슬라이드
  // 스와이퍼 인스턴스 생성
  const safeSlide = new Swiper(".section-safe .safe-slider", {
    slidesPerView: 4,
    autoplay: {
      delay: 3000,
    },
    loopedSlides: 8,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".section-safe .swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
      },
    },
    breakpoints: {
      // when window width is >= 1440px
      1440: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      475: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      279: {
        slidesPerView: 1,
        spaceBetween: 20
      },
    }
  });

  $('.section-safe .swiper-btns .prev').on('click', () => safeSlide.slidePrev());
  $('.section-safe .swiper-btns .next').on('click', () => safeSlide.slideNext());
}

// 메인페이지 글자 애니메이션
function coverTextAnimation() {
  const txtArr = [...$('.main-cover .cover-text p')];
  const activeArr = $('.main-cover .cover-text p.active');
  const delay = Number($('.main-cover .cover-text p').css('transition-duration').split('s')[0]) * 1000;
  let breakPoint = delay;
  let loop = true;

  if(activeArr.length == txtArr.length) {
    activeArr.removeClass('active');
    setTimeout(() => coverTextAnimation(delay), delay * 2);
    return false;
  }

  txtArr.forEach(txt => {
    const isActive = txt.classList.value.includes('active');
    const isBreak = txt.classList.value.includes('break');

    if(!isActive && loop) {
      txt.classList.add('active');
      loop = false;

      if(isBreak) {
        breakPoint = delay * 2;
      }
    }

  });

  setTimeout(() => coverTextAnimation(delay), breakPoint);
}

// 서브페이지 상단 패딩 추가
function addSubTopGap() {
  if($(window).innerWidth() > 1440) {
    const INNER_SIZE = 1120;
    const gap = $('.add-gap').length;
    const outer = $('.layout-outer').innerWidth();
    
    if(gap) $('html').css('--add-sub-top-gap', (outer - INNER_SIZE) / 2 + 'px');
  }
}