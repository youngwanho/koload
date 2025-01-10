<?
$meta_title = '한국도로교통공단 신호등 vol84 :: 특별 이벤트 :: 「신호등」을 내 손안에! 이북 무료 소장 인증 이벤트';
$meta_description = '언제 어디서든 신호등을 소장해 보세요. 밀리의 서재, 알라딘, 교보문고, yes24 등 도서 플랫폼에서 신호등 e-book을 무료 구매 후 인증샷과 구독 소감을 남겨주시면 추첨을 통해 소정의 상품을 보내드립니다.';

include_once "head.php";
?>

<body data-page-type="sub" data-tag-theme="green">
  <style>
    .img-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    @media screen and (max-width: 768px) {
      .img-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }
    }

    .img-grid img {
      margin-bottom: 10px;
    }

    .img-grid .indent-num {
      line-height: normal;
    }
  </style>

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
              특별 이벤트
            </span>
            <span class="tag-cont align-h">
              특별 이벤트
            </span>
          </div>

          <div class="top-text add-gap">
            <h2 class="title" style="text-indent: -20px;">
              「신호등」을 내 손안에! <br>
              <b>이북 무료 소장 인증 이벤트</b>
            </h2>

            <p class="cont">
              언제 어디서든 신호등을 소장해 보세요. <br class="pc">밀리의 서재, 알라딘, 교보문고, yes24 등 도서 플랫폼에서 신호등 e-book을 무료 구매 후 <br class="pc">인증샷과 구독 소감을 남겨주시면 추첨을 통해 소정의 상품을 보내드립니다.
            </p>

            <!-- <p class="cont mb-0">
              <b>글·그림.</b> 한국도로교통공단 정보보호처 권상민 대리
            </p> -->
          </div>

          <div class="top-image">
            <img src="../images/sub/sub23_01.jpg" alt="">
          </div>
        </div>

        <!-- 본문 -->
        <div class="contentsArea sub-cont">
          <div class="inner-wrap">

            <div class="cont-set">
              <ul class="img-grid">
                <li>
                  <img src="../images/sub/sub23_02.jpg" alt="">
                  <p class="cont-txt">
                    <span class="indent-num" data-indent-num="➊">포털사이트에서 ‘신호등 11+12월호’를 검색해 주세요.</span>
                  </p>
                </li>
                <li>
                  <img src="../images/sub/sub23_03.jpg" alt="">
                  <p class="cont-txt">
                    <span class="indent-num" data-indent-num="➋">
                      <span>
                        <span class="marker03">밀리의 서재, 알라딘, 교보문고, yes24</span> 등 도서 플랫폼에서 신호등 e-book을 무료 구매하세요.
                      </span>
                    </span>
                  </p>
                </li>
                <li>
                  <img src="../images/sub/sub23_04.jpg" alt="">
                  <p class="cont-txt">
                    <span class="indent-num" data-indent-num="➌">주문 내역에서 구매 목록을 캡쳐해 주세요. <br>(구매 금액 0원)</span>
                  </p>
                </li>
                <li>
                  <img src="../images/sub/sub23_05.jpg" alt="">
                  <p class="cont-txt">
                    <span class="indent-num" data-indent-num="➍" style="margin-bottom: 20px;">캡쳐한 이미지와 신호등 이북을 읽은 소감을 적어 ‘이름/휴대전화번호’와 함께 메일로 보내주세요.</span>
                    <a href="http://m.site.naver.com/14OoM" target="_blank" class="tag-gray" style="padding-inline: 25px; color: #fff; background-color: #222;">이북 보는 법&nbsp;&nbsp;→</a>
                  </p>
                </li>
              </ul>
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

  <!-- <script>
    const toonSlider = new Swiper(".toon.mySwiper", {
      pagination: {
        el: ".toon .swiper-pagination",
      },
      navigation: {
        nextEl: ".toon .swiper-button-next",
        prevEl: ".toon .swiper-button-prev",
      },
    });
  </script> -->
</body>

</html>