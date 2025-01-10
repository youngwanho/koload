<?php

$arrPageName=array("Intro","돌아보길","이맘때, 이 사고","안전, 한 뼘","궁금한 길 WHY","신호등이 만난 사람","알기 쉬운 도로교통법",
    "중간 점검","도로생활툰","어디로 갈까","죄와 벌","나의 사고 일지","요즘 도로","자동차 백과",
    "역사를 따라간 길","안전운전 10분 체조","강원 테마 여행","지역 축제 정보", "도로교통 소통","한국도로교통공단 소식","교통안전 소식", "내 손안의 안전", "교통안전 홍보작품 공모전 수상작", "특별 이벤트", "교통안전 색칠 공부","독자 마당");

$urlArr = explode("/", $_SERVER['PHP_SELF']);
$pageFileName = $urlArr[count($urlArr)-1];

$pageName = substr($pageFileName, 3, 2);
$currentPageNum = (int)$pageName;
$currentTitle = $arrPageName[$currentPageNum];

$prevUrl = getPageUrl($currentPageNum, -1, count($arrPageName)-1);
$nextUrl = getPageUrl($currentPageNum, 1, count($arrPageName)-1); 

$prevTitle = getPageTitle($arrPageName, $currentPageNum, -1, count($arrPageName)-1);
$nextTitle = getPageTitle($arrPageName, $currentPageNum, 1, count($arrPageName)-1);

function getPageUrl($currentPageNum, $plusValue, $maxCount)
{
    $changeNum = $currentPageNum + $plusValue;
    
    if($changeNum < 0)  $changeNum = $maxCount;
    else if($changeNum >= 0 && $changeNum < 10) $changeNum = "0".$changeNum;
    else if($changeNum > $maxCount) $changeNum = "00";
    return "sub".$changeNum.".php";
}

function getPageTitle($arrPageName, $currentPageNum, $plusValue, $maxCount)
{    
    $changeNum = $currentPageNum + $plusValue;    
    if($changeNum < 0)  $changeNum = $maxCount;   
    else if($changeNum > $maxCount) $changeNum = 0;    
    return $arrPageName[$changeNum];
}
?>

<div class="movement">
    <a href="<?=$prevUrl?>" class="prev" title="이전페이지 이동"><span><?=$prevTitle?></span></a>
    <a href="javascript:void(0);" class="present"><?=$currentTitle?></a>
    <a href="<?=$nextUrl?>" class="next" title="다음페이지 이동"><span><?=$nextTitle?></span></a>
</div>