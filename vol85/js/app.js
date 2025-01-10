$(function () {
  $('#header').on('click', '.btn-submenu', function () {
    $('.nav, .drop-shadow').toggleClass('on');
    $('body').toggleClass('overflow-hidden');
    $('.btn-submenu').toggleClass('on');
  });

  $('#submenu').on('click', '.drop-shadow', function () {
    $('.nav, .drop-shadow').toggleClass('on');
    $('body').toggleClass('overflow-hidden');
    $('.btn-submenu').toggleClass('on');
  });

  $('#submenu').on('click', '.btn-close', function () {
    $('.nav, .drop-shadow').toggleClass('on');
    $('body').removeClass('overflow-hidden');
    $('.btn-submenu').removeClass('on');
  });

  // 검색
  $('.btn-search').on('click', function () {
    $('.search-bar').fadeIn(200);
    $('.search-bar').addClass('on');
    $('body').toggleClass('overflow-hidden');
  });

  //검색영역 외부 클릭시 닫힘
  $('.search-bar').on('click', function (e) {
    if (!$('.search-bar .search-form').has(e.target).length == 1) {
      $('.search-bar').fadeOut(200);
      $('.search-bar').removeClass('on');
      $('body').toggleClass('overflow-hidden');
    }
  });

  $(window).scroll(function () {
    var s1Height = $('#section01').innerHeight();

    const scrollTop = $(window).scrollTop();
    //스크롤시 두번째 섹션
    let section02Top = $('#section02').offset().top;
    if (scrollTop >= section02Top - 0) {
      $('#section02').addClass('on');
      $('header').addClass('white');
    } else {
      $('header').removeClass('white');
    }
    //플로팅
    if ($(this).scrollTop() > s1Height - 500) {
      $('.floating').fadeIn(200);
    } else {
      $('.floating').fadeOut(200);
    }
  });
  $('.btn-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
});

//페이지 링크 복사
$(document).on('click', '#sh-link', function (e) {
  // 링크복사 시 화면 크기 고정
  $('html').find('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no');
  var html = "<input id='clip_target' name='clip_target' type='text' value='' style='position:absolute;top:-9999em;' />";
  $(this).append(html);
  var input_clip = document.getElementById('clip_target'); //현재 url 가져오기
  var _url = $(location).attr('href');
  $('#clip_target').val(_url);
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    var editable = input_clip.contentEditable;
    var readOnly = input_clip.readOnly;
    input_clip.contentEditable = true;
    input_clip.readOnly = false;
    var range = document.createRange();
    range.selectNodeContents(input_clip);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    input_clip.setSelectionRange(0, 999999);
    input_clip.contentEditable = editable;
    input_clip.readOnly = readOnly;
  } else {
    input_clip.select();
  }
  try {
    var successful = document.execCommand('copy');
    input_clip.blur();
    $("input[name='clip_target']").hide();
    if (successful) {
      alert('URL이 복사 되었습니다. 원하시는 곳에 붙여넣기 해 주세요.'); // 링크복사 시 화면 크기 고정
      $('html').find('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes');
    } else {
      alert('이 브라우저는 지원하지 않습니다.');
    }
  } catch (err) {
    alert('이 브라우저는 지원하지 않습니다.');
  }
}); //클립보드 복사
