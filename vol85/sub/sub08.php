<?
$meta_title = '한국도로교통공단 신호등 vol84 :: 도로생활툰 :: 김그래 작가와 함께하는 도로생활툰';
$meta_description = '6화 반짝이는 보물';

include_once "head.php";
?>

<body data-page-type="sub" data-tag-theme="orange">
  <!-- wrap -->
  <div id="wrapper" class="">
    <!-- Header(공통) -->
    <? include_once "header.php"; ?>

    <section id="" class="sub sub-page-layout">
      <div class="layout-outer">

        <!-- 서브 상단 -->
        <div class="topArea sub-top">
          <div class="top-tag">
            <span class="tag-cont align-v">
              도로생활툰
            </span>
            <span class="tag-cont align-h">
              도로생활툰
            </span>
          </div>

          <div class="top-text add-gap">
            <h3 class="sub-title mb-0">
              김그래 작가와 함께하는
            </h3>
            <h2 class="title">
              <b>도로생활툰</b>
            </h2>

            <!-- <p class="cont mb-0">
                          <b style="color: inherit;">김그래 작가</b>
                        </p> -->

            <!-- <p class="cont mb-0">
                          찬찬히 흐르는 일상의 소박함을 그린다. 일상이 늘 그렇듯 화려하고 극적인 장면은 많지 않다. 하지만 그 속에 마음을 토닥이는 이야기와 웃픈 하루의 위로가 녹아있다. 온라인으로 활동을 시작해 현재는 저서 &lt;그래일기&gt;, &lt;Gre, 그래!&gt;와 오프라인 전시 등으로 활발히 활동하는 중이다.<br>
                          인스타그램_ @gimgre
                        </p> -->
          </div>

          <div class="top-image round-image" style="align-items: center; justify-content: center;">
            <img src="../images/sub/sub08_01.png" alt="" style="width: 100%; max-width: 329px; border: 1px solid #000; border-radius: 50%;">
          </div>
        </div>

        <!-- 본문 -->
        <div class="contentsArea sub-cont">
          <div class="inner-wrap">

            <div class="cont-set img-set">
              <!-- <p class="cont-img" style="width: 80%; margin: 0 auto;">
                          <span style="border-radius: 50%; border: 1px solid #282828;">
                            <img src="../images/sub/sub08_02.png" alt="">
                          </span>
                        </p> -->

              <p class="cont-txt"></p><!-- 간격 조정 -->

              <div class="swiper mySwiper toon" style="margin: 0 auto; max-width: 736px;">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="../images/sub/sub08_02.jpg" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="../images/sub/sub08_03.jpg" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="../images/sub/sub08_04.jpg" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="../images/sub/sub08_05.jpg" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="../images/sub/sub08_06.jpg" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="../images/sub/sub08_07.jpg" alt="">
                  </div>
                </div>
                <div class="swiper-btns">
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
                <div class="swiper-pagination" style="position: static; margin-top: 0.5em;"></div>
              </div>

            </div>

            <div class="cont-set">
              <div class="line"></div>
              <div class="flex flex-pc" style="gap: 0px 40px; align-items: center;">
                <p class="cont-txt">
                  <b>김그래 작가</b><br>
                  찬찬히 흐르는 일상의 소박함을 그린다. 일상이 늘 그렇듯 화려하고 극적인 장면은 많지 않다. 하지만 그 속에 마음을 토닥이는 이야기와 웃픈 하루의 위로가 녹아있다. 온라인으로 활동을 시작해 현재는 저서 &lt;그래일기&gt;, &lt;Gre, 그래!&gt;와 오프라인 전시 등으로 활발히 활동하는 중이다.<br>
                  인스타그램_ @gimgre
                </p>

                <span style="min-width: 40%;">
                  <img src="../images/sub/sub08_writer.jpg" alt="">
                </span>
              </div>
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
    const toonSlider = new Swiper(".toon.mySwiper", {
      pagination: {
        el: ".toon .swiper-pagination",
      },
      navigation: {
        nextEl: ".toon .swiper-button-next",
        prevEl: ".toon .swiper-button-prev",
      },
    });
  </script>
</body>

</html>