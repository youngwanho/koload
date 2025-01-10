<?
$meta_title = '한국도로교통공단 신호등 2024년 11+12월호 vol.84';
$meta_description = '신호등 - 한국도로교통공단';

include_once "./sub/head.php";
?>

<body data-page-type="main">
  <!-- Header(공통) -->
  <? include_once "./sub/header.php"; ?>

  <!-- 커버 이미지 -->
  <aside class="main-cover">
    <h2 class="hide">신호등 메인 페이지 커버 이미지</h2>
    <div class="cover-box">
      <img src="./images/main/main_cover.gif" alt="커버 이미지">
      <div class="cover-text">
        <!-- 
            메인페이지 커버 글자 애니메이션 파트

            문장 개행 시 br태그 사용하고,
            띄어쓰기 시 &nbsp; 사용,
            break 클래스 부착하여 애니메이션 딜레이 2배 적용
          -->
        <p class="break">산책길,&nbsp;</p>
        <p class="break">천천히 가도 괜찮습니다.</p>
        <br>

        <p class="break">그동안 열심히 달려 왔잖아요.</p>
      </div>
    </div>
  </aside>

  <!-- Section(메인) -->
  <main>
    <h1 class="hide"><?= $meta_title ?></h1>

    <section class="main-contents">
      <!-- 약속으로 -->
      <article class="section-promise">
        <div class="inner-wrap">
          <div class="title-between">
            <h3 class="sec-title">약속으로</h3>

            <div class="swiper-btns">
              <div class="swiper-pagination"></div>
              <button class="prev">
                <img src="./images/common/circle-prev.png" alt="">
              </button>
              <button class="next">
                <img src="./images/common/circle-next.png" alt="">
              </button>
            </div>
          </div>

          <!-- Swiper -->
          <div class="swiper mySwiper promise-slider">
            <div class="swiper-wrapper">

              <!-- 0 -->
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub00.php" class="cover-link"></a>
                <span class="img-box">
                  <img src="./images/main/thumbnail00.png" alt="">
                  <span class="filter"></span>
                </span>
                <span class="tag-bk">Intro</span>
                <p>산책길</p>
              </div>

              <!-- 1 -->
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub01.php" class="cover-link"></a>
                <span class="img-box">
                  <img src="./images/main/thumbnail01.png" alt="">
                  <span class="filter"></span>
                </span>
                <span class="tag-bk">돌아보길</span>
                <p>비로소 마주하는 것들</p>
              </div>

              <!-- 2 -->
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub02.php" class="cover-link"></a>
                <span class="img-box">
                  <img src="./images/main/thumbnail02.png" alt="">
                  <span class="filter"></span>
                </span>
                <span class="tag-bk">이맘때, 이 사고</span>
                <p>도로 위 어르신 보호! 고령 보행자 교통사고</p>
              </div>

              <!-- 3 -->
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub03.php" class="cover-link"></a>
                <span class="img-box">
                  <img src="./images/main/thumbnail03.png" alt="">
                  <span class="filter"></span>
                </span>
                <span class="tag-bk">안전, 한 뼘</span>
                <p>미끄러짐 방지! 겨울철 안전 지름길</p>
              </div>

              <!-- 4 -->
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub04.php" class="cover-link"></a>
                <span class="img-box">
                  <img src="./images/main/thumbnail04.png" alt="">
                  <span class="filter"></span>
                </span>
                <span class="tag-bk">궁금한 길 WHY</span>
                <p>도로에 로봇이 나타난 이유 <br>왜 실외 이동로봇에 주목하는 걸까?</p>
              </div>

              <!-- 5 -->
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub05.php" class="cover-link"></a>
                <span class="img-box">
                  <img src="./images/main/thumbnail05.png" alt="">
                  <span class="filter"></span>
                </span>
                <span class="tag-bk">신호등이 만난 사람</span>
                <p style="letter-spacing: -1.8px;">사고처리를 넘어 사고 예방까지! <br>삼성화재 고객연결TF</p>
              </div>

              <!-- 7 -->
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub06.php" class="cover-link"></a>
                <span class="img-box">
                  <img src="./images/main/thumbnail06.png" alt="">
                  <span class="filter"></span>
                </span>
                <span class="tag-bk">알기 쉬운 도로교통법</span>
                <p>모두를 위해 기억하세요! <br>보행자 보호를 위한 약속</p>
              </div>

              <!-- 8 -->
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub07.php" class="cover-link"></a>
                <span class="img-box">
                  <img src="./images/main/thumbnail07.png" alt="">
                  <span class="filter"></span>
                </span>
                <span class="tag-bk">중간 점검</span>
                <p>목적지를 향해 가는 현명한 선택</p>
              </div>

            </div>
          </div>
        </div>
      </article>

      <!-- 실천으로 -->
      <article class="section-practice">
        <div class="inner-wrap">
          <h3 class="sec-title">실천으로</h3>

          <ul>

            <!-- 9 -->
            <li class="pr-box">
              <a href="<?= $threeSubDepth ?>sub08.php" class="cover-link"></a>
              <img src="./images/main/thumbnail08.png" alt="">

              <div>
                <h6>도로생활툰</h6>
                <h5>6화 반짝이는 보물</h5>
              </div>
            </li>

            <!-- 10 -->
            <li class="pr-box">
              <a href="<?= $threeSubDepth ?>sub09.php" class="cover-link"></a>
              <img src="./images/main/thumbnail09.png" alt="">

              <div>
                <h6>어디로 갈까</h6>
                <h5>연말연시를 준비하는 겨울 <br>해넘이? 해돋이?</h5>
              </div>
            </li>

            <!-- 11 -->
            <li class="pr-box">
              <a href="<?= $threeSubDepth ?>sub10.php" class="cover-link"></a>
              <img src="./images/main/thumbnail10.png" alt="">

              <div>
                <h6>죄와 벌</h6>
                <h5>무단횡단의 최후 <br>그 곳을 건너지 마오</h5>
              </div>
            </li>

            <!-- 12 -->
            <li class="pr-box">
              <a href="<?= $threeSubDepth ?>sub11.php" class="cover-link"></a>
              <img src="./images/main/thumbnail11.png" alt="">

              <div>
                <h6>나의 사고 일지</h6>
                <h5>보행자 교통사고 후기</h5>
              </div>
            </li>

            <!-- 13 -->
            <li class="pr-box">
              <a href="<?= $threeSubDepth ?>sub12.php" class="cover-link"></a>
              <img src="./images/main/thumbnail12.png" alt="">

              <div>
                <h6>요즘 도로</h6>
                <h5>도로 살얼음에 대적하는 과학기술 <br>기술로 지키는 교통안전</h5>
              </div>
            </li>

            <!-- 14 -->
            <li class="pr-box">
              <a href="<?= $threeSubDepth ?>sub13.php" class="cover-link"></a>
              <img src="./images/main/thumbnail13.png" alt="">

              <div>
                <h6>자동차 백과</h6>
                <h5>안전을 위한 자동차 디자인</h5>
              </div>
            </li>

            <!-- 15 -->
            <li class="pr-box">
              <a href="<?= $threeSubDepth ?>sub14.php" class="cover-link"></a>
              <img src="./images/main/thumbnail14.png" alt="">

              <div>
                <h6>역사를 따라간 길</h6>
                <h5>윤봉길 의사와 매헌로</h5>
              </div>
            </li>

            <!-- 16 -->
            <li class="pr-box">
              <a href="<?= $threeSubDepth ?>sub15.php" class="cover-link"></a>
              <img src="./images/main/thumbnail15.png" alt="">

              <div>
                <h6>안전운전 10분 체조</h6>
                <h5 style="text-wrap: wrap;">쌀쌀한 날씨, 외출 전 몸풀기 체조</h5>
              </div>
            </li>

          </ul>
        </div>
      </article>

      <!-- 안전으로 -->
      <article class="section-safe">
        <div class="inner-wrap">
          <h3 class="sec-title">안전으로</h3>

          <div class="safe-box">
            <div class="safe-left">
              <div class="safe-inner">
                <span>
                  <a href="<?= $threeSubDepth ?>sub16.php" class="cover-link"></a>
                  <img src="./images/main/thumbnail16.png" alt="">

                  <span class="safe-txt">
                    <span class="tag-bk">강원 테마 여행</span>
                    <span class="tag-w">꽃피는 겨울,</span>
                    <span class="tag-w">강원에서 피어난 작은 희망</span>
                  </span>
                </span>
                <span>
                  <a href="<?= $threeSubDepth ?>sub17.php" class="cover-link"></a>
                  <img src="./images/main/thumbnail17.png" alt="">

                  <span class="safe-txt">
                    <span class="tag-bk">지역 축제 정보</span>
                    <span class="tag-w">11+12월</span>
                    <span class="tag-w">국내 문화 축제.zip</span>
                  </span>
                </span>
              </div>
            </div>

            <div class="safe-right">
              <a href="<?= $threeSubDepth ?>sub25.php">
                <img src="./images/main/thumbnail19.png" alt="">
              </a>
              <a href="<?= $threeSubDepth ?>sub24.php">
                <img src="./images/main/thumbnail20.png" alt="">
              </a>
            </div>
          </div>

          <div class="flex-end">
            <div class="swiper-btns">
              <div class="swiper-pagination"></div>
              <button class="prev">
                <img src="./images/common/circle-prev.png" alt="">
              </button>
              <button class="next">
                <img src="./images/common/circle-next.png" alt="">
              </button>
            </div>
          </div>

          <div class="swiper mySwiper safe-slider">

            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub18.php" class="cover-link"></a>
                <span class="tag-bk">도로교통 소통</span>
                <p>
                  한국도로교통공단 <br>SNS 채널에 소개한 유익한 정보를 <br>모아 보았습니다.
                </p>
                <span class="img-box full-box">
                  <img src="./images/main/thumbnail21.jpg" alt="">
                </span>
              </div>
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub19.php" class="cover-link"></a>
                <span class="tag-bk">
                  <span style="color: inherit; letter-spacing: -1.5px;">한국도로교통공단</span>
                  <span style="color: inherit; white-space: nowrap; letter-spacing: -1.5px;">소식</span>
                </span>
                <p>
                ‘교통안전을 약속해 주세요!’ <br>전국 어르신 교통안전 서약식 개최
                </p>
                <span class="img-box">
                  <img src="./images/main/thumbnail22.png" alt="">
                </span>
              </div>
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub20.php" class="cover-link"></a>
                <span class="tag-bk">교통안전 소식</span>
                <p>
                여객시설 내 장애인전용주차구역에서 주차 방해 시 과태료 50만 원
                </p>
                <span class="img-box">
                  <img src="./images/main/thumbnail23.png" alt="">
                </span>
              </div>
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub21.php" class="cover-link"></a>
                <span class="tag-bk">내 손안의 안전</span>
                <p>
                  이젠 잊지 마세요 <br>
                  운전자 맞춤형 안전교육
                </p>
                <span class="img-box">
                  <img src="./images/main/thumbnail24.png" alt="">
                </span>
              </div>
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub22.php" class="cover-link"></a>
                <span class="tag-bk" style="letter-spacing: -1px;">교통안전 홍보작품 공모전 수상작</span>
                <p>
                  교통안전 홍보작품 공모전 수상작
                </p>
                <span class="img-box">
                  <img src="./images/main/thumbnail25.png" alt="">
                </span>
              </div>
              <div class="swiper-slide">
                <a href="<?= $threeSubDepth ?>sub23.php" class="cover-link"></a>
                <span class="tag-bk">특별 이벤트</span>
                <p>
                「신호등」을 내 손안에! <br>
                이북 무료 소장 인증 이벤트
                </p>
                <span class="img-box">
                  <img src="./images/main/thumbnail26.png" alt="">
                </span>
              </div>
            </div>

          </div>
        </div>
      </article>
    </section>

    <!-- Footer (공통) -->
    <? include_once "./sub/footer.php"; ?>
  </main>

  <!-- Top(공통) -->
  <? include_once "./sub/bottom.php"; ?>
</body>

</html>