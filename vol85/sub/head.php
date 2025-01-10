<?php

$oneDepth = ""; //koroad 폴더 내
$twoDepth = ""; //koroad/vol85 폴더 내
$threeSubDepth = ""; //koroad/vol85/sub 폴더 내
$headerCss = '';
$mainFlag = false;
$nowPage      =  $_SERVER['PHP_SELF'];

if (strpos($nowPage, "index.php") > 0 || strpos($nowPage, "list.php") > 0) {
  $oneDepth = "../";
  $twoDepth = "./";
  $threeSubDepth = "./sub/";

  if (strpos($nowPage, "index.php") > 0) {
    $headerCss = 'class="main"';
    $mainFlag = true;
  }
} else //sub 안에 있는  파일들 
{
  $oneDepth = "../../";
  $twoDepth = "../";
  $threeSubDepth = "";
}

?>

<!DOCTYPE HTML>
<html>

<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-V2MNJ5ER53"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-V2MNJ5ER53');
  </script>

  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="author" content="user" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=0.5, user-scalable=yes" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="robots" content="all" />
  <meta name="title" content="<?= $meta_title ?>" />
  <meta name="subject" content="<?= $meta_title ?>" />
  <meta name="keywords" content="한국도로교통공단, 한국도로교통공단웹진, 신호등, 신호등웹진, KoROAD, KoROADwebzine" />
  <meta name="description" content="<?= $meta_description ?>" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="<?= $meta_title ?>" />
  <meta property="og:site_name" content="<?= $meta_title ?>" />
  <meta property="og:url" content="http://news.koroad.or.kr/koroad/vol85/">
  <meta property="og:description" content="<?= $meta_description ?>" />
  <meta property="og:image" content="<?= $twoDepth ?>images/sns/sns_img_85.jpg" />
  <meta name="twitter:title" content="<?= $meta_title ?> " />
  <meta name="twitter:site" content="신호등" />
  <meta name="twitter:description" content="<?= $meta_description ?>" />
  <meta name="twitter:image" content="<?= $twoDepth ?>images/sns/sns_img_85.jpg" />
  <meta name="nate:title" content="<?= $meta_title ?>" />
  <meta name="nate:site_name" content="신호등" />
  <meta name="nate:url" content="http://news.koroad.or.kr/koroad/vol85/" />
  <meta name="nate:description" content="<?= $meta_description ?>" />
  <meta name="nate:image" content="<?= $twoDepth ?>/images/sns/sns_img_85.jpg" />
  <title><?= $meta_title ?></title>
  <link href="../images/common/favicon.ico" rel="shortcut icon" type="image/x-icon" />

  <link rel="stylesheet" href="<?= $twoDepth ?>css/swiper.min.css" />
  <link rel="stylesheet" href="<?= $twoDepth ?>css/normalize.css" />
  <link rel="stylesheet" href="<?= $twoDepth ?>css/site.css" />
  <link rel="stylesheet" href="<?= $twoDepth ?>css/main.scss" />
  <link rel="stylesheet" href="<?= $twoDepth ?>css/layout.scss" />
  <link rel="stylesheet" href="<?= $twoDepth ?>css/animation.css" />

  <script src="<?= $twoDepth ?>js/jquery-3.6.1.min.js"></script>
  <script src="<?= $twoDepth ?>js/swiper.jquery.min.js"></script>
  <script src="<?= $twoDepth ?>js/app.js"></script>
  <script src="<?= $twoDepth ?>js/index.js"></script>
  <script src="<?= $oneDepth ?>js/tipuesearch.js"></script>
  <script src="<?= $oneDepth ?>js/tipuesearch_content.js"></script>
  <script src="<?= $oneDepth ?>js/tipuesearch_set.js"></script>
  <script src="<?= $oneDepth ?>js/thumbList.js"></script>
</head>