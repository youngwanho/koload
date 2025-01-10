$(function () {
  // 섹션02 스와이퍼 썸네일
  var s2Swiper = new Swiper('#section02_swiper', {
    slidesPerView: 1.7,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    initialSlide: 0,
    on: {
      slideChange: function () {
        var activeIndex = this.realIndex;
        var titles = [
          {
            tit: '침묵도 소통입니다01',
            txt: ' 운전을 하다보면 마주치게 되는 나들목. 특히 출퇴근 무렵이면 항상 막히는데 왜 하필 여기에 만들어졌을까? 궁금했던 이유를 파헤쳐 본다.',
            href: './2025/01/01.html',
          },
          {
            tit: '침묵도 소통입니다02',
            txt: ' 운전을 하다보면 마주치게 되는 나들목. 특히 출퇴근 무렵이면 항상 막히는데 왜 하필 여기에 만들어졌을까? 궁금했던 이유를 파헤쳐 본다.',
            href: './2025/01/01.html',
          },
          {
            tit: '침묵도 소통입니다03',
            txt: ' 운전을 하다보면 마주치게 되는 나들목. 특히 출퇴근 무렵이면 항상 막히는데 왜 하필 여기에 만들어졌을까? 궁금했던 이유를 파헤쳐 본다.',
            href: './2025/01/01.html',
          },
        ];
        var activeTitle = titles[activeIndex];
        // 현재 사용된 클래스명 제거
        $('.title-wrap').removeClass(function (index, className) {
          return (className.match(/title-wrap\d+/g) || []).join(' ');
        });

        // 새로운 클래스명 추가
        $('.title-wrap').addClass(activeTitle.class);

        // 제목과 링크 업데이트
        $('.tit-wrap .slide-tit').html(activeTitle.tit);
        $('.tit-wrap .slide-txt').html(activeTitle.txt);
        $('.tit-wrap .btn-link').attr('href', activeTitle.href);
      },
    },
    breakpoints: {
      1400: {
        slidesPerView: 1.7,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 2.8,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2.6,
        centeredSlides: true,
      },
      320: {
        slidesPerView: 1.8,
        centeredSlides: true,
      },
    },
  });

  // 섹션03 스와이퍼
  $(function () {
    var s3Swiper;

    function initSwiper() {
      if (window.innerWidth > 768 && !s3Swiper) {
        s3Swiper = new Swiper('#section03_swiper', {
          spaceBetween: 30,
          loop: true,
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }
    }

    function destroySwiper() {
      if (window.innerWidth <= 768 && s3Swiper) {
        s3Swiper.destroy(true, true);
        s3Swiper = null;
      }
    }

    initSwiper();
    destroySwiper();

    $(window).on('resize', function () {
      initSwiper();
      destroySwiper();
    });
  });

  $('.main #section03').on('click', '.btn-slice', function () {
    $('.swiper-slide').toggleClass('show');
    $('.btn-slice').toggleClass('on');
  });

  // 섹션04 스와이퍼
  var s4Swiper = new Swiper('#section04_swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.2,
      },
      576: {
        slidesPerView: 1.6,
      },
      320: {
        slidesPerView: 1.6,
      },
    },
  });

  //스노우 애니메이션
  const $snowContainer = $('.snow-wrap');

  const particlesPerThousandPixels = 0.1;
  const fallSpeed = 1.25;
  const maxSnowflakes = 200;
  const snowflakes = [];

  let snowflakeInterval;
  let isTabActive = true;

  function resetSnowflake($snowflake) {
    const size = Math.random() * 5 + 2;
    const viewportWidth = $(window).width() - size; // Adjust for snowflake size
    const viewportHeight = $(window).height();

    $snowflake.css({
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * viewportWidth}px`, // Randomize X position
      top: `-${size}px`, // Start off-screen at the top
    });

    const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
    const animationType = Math.random() < 0.5 ? 'fall' : 'diagonal-fall';
    $snowflake.css({
      animationDuration: `${animationDuration}s`,
      animationTimingFunction: 'linear',
      animationName: animationType,
    });

    setTimeout(() => {
      if (parseInt($snowflake.css('top'), 10) < viewportHeight) {
        resetSnowflake($snowflake); // Reset snowflake if still in view
      } else {
        $snowflake.remove(); // Remove snowflake when it goes off the screen
      }
    }, animationDuration * 1000);
  }

  function createSnowflake() {
    if (snowflakes.length < maxSnowflakes) {
      const $snowflake = $('<div class="snowflake"></div>');
      snowflakes.push($snowflake);
      $snowContainer.append($snowflake);
      resetSnowflake($snowflake);
    }
  }

  function generateSnowflakes() {
    const numberOfParticles = Math.ceil(($(window).width() * $(window).height()) / 1000) * particlesPerThousandPixels;
    const interval = 5000 / numberOfParticles;

    clearInterval(snowflakeInterval);
    snowflakeInterval = setInterval(() => {
      if (isTabActive && snowflakes.length < maxSnowflakes) {
        requestAnimationFrame(createSnowflake);
      }
    }, interval);
  }

  function handleVisibilityChange() {
    isTabActive = !document.hidden;
    if (isTabActive) {
      generateSnowflakes();
    } else {
      clearInterval(snowflakeInterval);
    }
  }

  generateSnowflakes();

  $(window).resize(function () {
    clearInterval(snowflakeInterval);
    setTimeout(generateSnowflakes, 1000);
  });

  $(document).on('visibilitychange', handleVisibilityChange);

  $(window).on('scroll', function () {
    $('.scroll-ani').each(function () {
      var elementTop = $(this).offset().top;
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();

      if (scrollTop + windowHeight > elementTop && scrollTop < elementTop + $(this).height()) {
        // 요소가 화면에 보이면 'on' 클래스 추가
        $(this).addClass('on');
      } else {
        // 화면에서 벗어나면 'on' 클래스 제거
        // $(this).removeClass('on');
      }
    });
  });
});
