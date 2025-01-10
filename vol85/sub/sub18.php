<?
$meta_title = '한국도로교통공단 신호등 vol84 :: 도로교통 소통 :: 도로교통 소통';
$meta_description = '한국도로교통공단 SNS 채널에 소개한 유익한 정보를 모아 보았습니다.';

include_once "head.php";
?>

<body data-page-type="sub" data-tag-theme="green">
  <!-- wrap -->
  <div id="wrapper" class="">
    <!-- Header(공통) -->
    <? include_once "header.php"; ?>

    <section id="" class="sub sub-page-layout">
      <div class="layout-outer">

        <!-- 서브 상단 -->
        <div class="topArea sub-top mobile-mb-0">
          <div class="top-tag">
            <span class="tag-cont align-v">
              도로교통 소통
            </span>
            <span class="tag-cont align-h">
              도로교통 소통
            </span>
          </div>

          <div class="top-text add-gap">
            <h2 class="title">
              <b>도로교통 소통</b>
            </h2>

            <p class="cont">
              한국도로교통공단 SNS 채널에 소개한 <br>유익한 정보를 모아 보았습니다.
            </p>

            <!-- <p class="cont mb-0">
                        글. 차은서 <br class="mo">사진. 한국관광공사, 인제군청, 아쿠아플라넷 여수, 녹테마레, 필례온천
                        </p> -->
          </div>

          <div class="top-image flex" style="align-items: center;">
            <img src="../images/sub/sub18_00.jpg" alt="" style="width: 100%; max-width: 335px;">
          </div>
        </div>

        <!-- 본문 -->
        <div class="contentsArea sub-cont" style="overflow: hidden;">
          <div class="inner-wrap card-ui">
            <!-- Swiper -->
            <div class="swiper mySwiper card-slider">
              <div class="swiper-wrapper">
                <!-- card -->
                <!-- <div class="swiper-slide btn-container">
                  <img src="../images/sub/sub18_01.png" alt="">
                  <span class="btn-wrap">
                    <a href="https://m.site.naver.com/1pYVJ" target="_blank">  
                    <a href="https://m.site.naver.com/1pYWD" target="_blank">  
                  </span>
                </div> -->
                <!-- card -->
                <div class="swiper-slide">
                  <a href="https://m.site.naver.com/1u7Ne" target="_blank">
                    <img src="../images/sub/sub18_01.png" alt="">
                  </a>
                </div>
                <!-- card -->
                <div class="swiper-slide">
                  <a href="https://m.site.naver.com/1u7Nq" target="_blank">
                    <img src="../images/sub/sub18_02.png" alt="">
                  </a>
                </div>
                <!-- card -->
                <div class="swiper-slide">
                  <a href="https://m.site.naver.com/1u7NH" target="_blank">
                    <img src="../images/sub/sub18_03.png" alt="">
                  </a>
                </div>
                <!-- card -->
                <div class="swiper-slide">
                  <a href="https://m.site.naver.com/1u7Ob" target="_blank">
                    <img src="../images/sub/sub18_04.png" alt="">
                  </a>
                </div>
                <!-- card -->
                <div class="swiper-slide">
                  <a href="https://m.site.naver.com/1u7Ol" target="_blank">
                    <img src="../images/sub/sub18_05.png" alt="">
                  </a>
                </div>
                <!-- card -->
                <div class="swiper-slide">
                  <a href="https://m.site.naver.com/1u7Oz" target="_blank">
                    <img src="../images/sub/sub18_06.png" alt="">
                  </a>
                </div>
                <!-- card -->
                <div class="swiper-slide">
                  <a href="https://m.site.naver.com/1u7OL" target="_blank">
                    <img src="../images/sub/sub18_07.png" alt="">
                  </a>
                </div>
                <!-- card -->
                <div class="swiper-slide">
                  <a href="https://m.site.naver.com/1u7OW" target="_blank">
                    <img src="../images/sub/sub18_08.png" alt="">
                  </a>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <? include_once "paging.php"; ?>
        </div>
      </div>

      <!-- Footer (공통) -->
      <? include_once "footer.php"; ?>
    </section>

    <!-- Top(공통) -->
    <? include_once "bottom.php"; ?>
  </div>

  <script>
    const cardSlider = new Swiper(".card-slider", {
      pagination: {
        el: ".card-ui .swiper-pagination",
        type: "progressbar",
      },
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 2.5,
      centeredSlide: false,
      spaceBetween: 30,
      navigation: {
        nextEl: ".card-ui .swiper-button-next",
        prevEl: ".card-ui .swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
      }
    });
  </script>
</body>

</html>