    <? include_once "head.php"; ?> 	
    <body>
        <!-- wrap -->
        <div id="wrapper" class="">

            <!-- Header(공통) -->
            <? include_once "header.php"; ?>

            <section id="" class="sub" style="padding-top: 40px;">
                <!-- 서브 상단 -->
               <div class="topArea" style="background-image: url('../images/sub/sub_past_bg.jpg'); height: 300px;">
                    <div class="wrap" style="background-color: transparent;">
                        <div class="mo_bg"><img src="../images/sub/sub23_bg_mo.jpg" alt=""></div>
                        <div class="textWrap">
                            <div class="textTop text-center">
                                <h2 class="title">검색결과</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 본문 -->
                 <div class="contentsArea" style="background-color: #eeeeee;">
                 <div class="textbox">
                        <div class="upBox">
                            <span>  
                			<div id="tipue_search_content" ></div>
                 			</span>
                        </div>
                    </div>                  
                </div>

				<? include_once "footer.php"; ?>
                <!-- Footer (공통) -->
                
            </section>
			<? include_once "bottom.php"; ?>      


        </div>
        <script>
		$(document).ready(function() {
		  $('#tipue_search_input').tipuesearch({
		    'wholeWords' : false, 
		    'showTime' : false  });
		});
	</script>
    </body>
</html>