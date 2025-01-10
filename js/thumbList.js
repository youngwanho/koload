//<![CDATA[
$(document).ready(function(){
	if(!location.href.includes('list')) {
		return false;
	}

	(function($){
		thumbList();
		pdfView();
	})(jQuery);
});

function thumbList(){
	$('.thumbList').append(
		'<div class="mw1280at">'+
			'<h4 class="bbYear bookT tC000000">2024</h4>'+
			'<div class="bbl">'+
				'<ul class="board_book just-start">'+
          '<li>'+
						'<div class="thumbImg">'+
								'<h5>'+
										'<em>Vol.484</em>'+
										'<strong>11+12월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
										'<img src="../images/list/2024_1112.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
										'<span class="bbBtn">'+
												'<a href="http://news.koroad.or.kr/koroad/vol84/" title="페이지이동" target="_blank">11+12월 웹진보기</a>'+
												'<a href="../pdf/241112_view.pdf" title="새창페이지" target="_blank" class="pv241112">PDF보기</a>'+
												'<a href="http://news.koroad.or.kr/koroad/ebook/vol84/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
										'</span>'+
								'</p>'+
						'</div>'+
					'</li>'+
          '<li>'+
						'<div class="thumbImg">'+
								'<h5>'+
										'<em>Vol.483</em>'+
										'<strong>9+10월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
										'<img src="../images/list/2024_0910.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
										'<span class="bbBtn">'+
												'<a href="http://news.koroad.or.kr/koroad/vol83/" title="페이지이동" target="_blank">9+10월 웹진보기</a>'+
												'<a href="../pdf/240910_view.pdf" title="새창페이지" target="_blank" class="pv240910">PDF보기</a>'+
												'<a href="http://news.koroad.or.kr/koroad/ebook/vol83/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
										'</span>'+
								'</p>'+
						'</div>'+
					'</li>'+
          '<li>'+
						'<div class="thumbImg">'+
								'<h5>'+
										'<em>Vol.482</em>'+
										'<strong>7+8월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
										'<img src="../images/list/2024_0708.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
										'<span class="bbBtn">'+
												'<a href="http://news.koroad.or.kr/koroad/vol82/" title="페이지이동" target="_blank">7+8월 웹진보기</a>'+
												'<a href="../pdf/240708_view.pdf" title="새창페이지" target="_blank" class="pv240708">PDF보기</a>'+
												'<a href="http://news.koroad.or.kr/koroad/ebook/vol82/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
										'</span>'+
								'</p>'+
						'</div>'+
					'</li>'+
          '<li>'+
						'<div class="thumbImg">'+
								'<h5>'+
										'<em>Vol.481</em>'+
										'<strong>5+6월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
										'<img src="../images/list/2024_0506.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
										'<span class="bbBtn">'+
												'<a href="http://news.koroad.or.kr/koroad/vol81/" title="페이지이동" target="_blank">5+6월 웹진보기</a>'+
												'<a href="../pdf/240506_view.pdf" title="새창페이지" target="_blank" class="pv240506">PDF보기</a>'+
												'<a href="http://news.koroad.or.kr/koroad/ebook/vol81/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
										'</span>'+
								'</p>'+
						'</div>'+
					'</li>'+
          '<li>'+
						'<div class="thumbImg">'+
								'<h5>'+
										'<em>Vol.480</em>'+
										'<strong>3+4월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
										'<img src="../images/list/2024_0304.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
										'<span class="bbBtn">'+
												'<a href="http://news.koroad.or.kr/koroad/vol80/" title="페이지이동" target="_blank">3+4월 웹진보기</a>'+
												'<a href="../pdf/240304_view.pdf" title="새창페이지" target="_blank" class="pv240304">PDF보기</a>'+
												'<a href="http://news.koroad.or.kr/koroad/ebook/vol80/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
										'</span>'+
								'</p>'+
						'</div>'+
					'</li>'+
					'<li>'+
						'<div class="thumbImg">'+
								'<h5>'+
										'<em>Vol.479</em>'+
										'<strong>1+2월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
										'<img src="../images/list/2024_0102.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
										'<span class="bbBtn">'+
												'<a href="http://news.koroad.or.kr/koroad/vol79/" title="페이지이동" target="_blank">1+2월 웹진보기</a>'+
												'<a href="../pdf/240102_view.pdf" title="새창페이지" target="_blank" class="pv240102">PDF보기</a>'+
												'<a href="http://news.koroad.or.kr/koroad/ebook/vol79/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
										'</span>'+
								'</p>'+
						'</div>'+
					'</li>'+
				'</ul>'+
			'</div>'+

            '<h4 class="bbYear bookT tC000000">2023</h4>'+
			'<div class="bbl">'+
				'<div class="bbr">'+
					'<ul class="board_book just-start">'+
                        '<li>'+
                            '<div class="thumbImg">'+
                                '<h5>'+
                                    '<em>Vol.478</em>'+
                                    '<strong>11+12월호</strong>'+
                                '</h5>'+
                                '<span class="bbImg">'+
                                    '<img src="../images/list/2023_1112.jpg" alt="" />'+
                                '</span>'+
                                '<p class="bbBtnWrap">'+
                                    '<span class="bbBtn">'+
                                        '<a href="http://news.koroad.or.kr/koroad/vol78/" title="페이지이동" target="_blank">11+12월 웹진보기</a>'+
                                        '<a href="../pdf/231112_view.pdf" title="새창페이지" target="_blank" class="pv231112">PDF보기</a>'+
                                        '<a href="http://news.koroad.or.kr/koroad/ebook/vol78/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
                                    '</span>'+
                                '</p>'+
                            '</div>'+
                        '</li>'+
                        '<li>'+
                            '<div class="thumbImg">'+
                                '<h5>'+
                                    '<em>Vol.477</em>'+
                                    '<strong>9+10월호</strong>'+
                                '</h5>'+
                                '<span class="bbImg">'+
                                    '<img src="../images/list/2023_0910.jpg" alt="" />'+
                                '</span>'+
                                '<p class="bbBtnWrap">'+
                                    '<span class="bbBtn">'+
                                        '<a href="http://news.koroad.or.kr/koroad/vol77/" title="페이지이동" target="_blank">9+10월 웹진보기</a>'+
                                        '<a href="../pdf/230910_view.pdf" title="새창페이지" target="_blank" class="pv230910">PDF보기</a>'+
                                        '<a href="http://news.koroad.or.kr/koroad/ebook/vol77/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
                                    '</span>'+
                                '</p>'+
                            '</div>'+
                        '</li>'+
                        '<li>'+
                            '<div class="thumbImg">'+
                                '<h5>'+
                                    '<em>Vol.476</em>'+
                                    '<strong>7+8월호</strong>'+
                                '</h5>'+
                                '<span class="bbImg">'+
                                    '<img src="../images/list/2023_0708.jpg" alt="" />'+
                                '</span>'+
                                '<p class="bbBtnWrap">'+
                                    '<span class="bbBtn">'+
                                        '<a href="http://news.koroad.or.kr/koroad/vol76/" title="페이지이동" target="_blank">7+8월 웹진보기</a>'+
                                        '<a href="../pdf/230708_view.pdf" title="새창페이지" target="_blank" class="pv230708">PDF보기</a>'+
                                        '<a href="http://news.koroad.or.kr/koroad/ebook/vol76/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
                                    '</span>'+
                                '</p>'+
                            '</div>'+
                        '</li>'+
                        '<li>'+
                            '<div class="thumbImg">'+
                                '<h5>'+
                                    '<em>Vol.475</em>'+
                                    '<strong>5+6월호</strong>'+
                                '</h5>'+
                                '<span class="bbImg">'+
                                    '<img src="../images/list/2023_0506.jpg" alt="" />'+
                                '</span>'+
                                '<p class="bbBtnWrap">'+
                                    '<span class="bbBtn">'+
                                        '<a href="http://news.koroad.or.kr/koroad/vol75/" title="페이지이동" target="_blank">5+6월 웹진보기</a>'+
                                        '<a href="../pdf/230506_view.pdf" title="새창페이지" target="_blank" class="pv230506">PDF보기</a>'+
                                        '<a href="http://news.koroad.or.kr/koroad/ebook/vol75/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
                                    '</span>'+
                                '</p>'+
                            '</div>'+
                        '</li>'+
                        '<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.474</em>'+
									'<strong>3+4월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2023_0304.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol74/" title="페이지이동" target="_blank">3+4월 웹진보기</a>'+
										'<a href="../pdf/230304_view.pdf" title="새창페이지" target="_blank" class="pv230304">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol74/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
                        '<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.473</em>'+
									'<strong>1+2월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2023_0102.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol73/" title="페이지이동" target="_blank">1+2월 웹진보기</a>'+
										'<a href="../pdf/230102_view.pdf" title="새창페이지" target="_blank" class="pv230102">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol73/index.html" title="페이지이동" target="_blank">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+					
					'</ul>'+
				'</div>'+
			'</div>'+


			'<h4 class="bbYear bookT tC000000">2022</h4>'+
			'<div class="bbl">'+
				'<div class="bbr">'+
					'<ul class="board_book">'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.472</em>'+
									'<strong>11+12월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2022_1112.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol71/" title="페이지이동" target="_blank">웹진보기1</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol72/" title="페이지이동" target="_blank">웹진보기2</a>'+
										'<a href="../pdf/221112_view.pdf" title="새창페이지" target="_blank" class="pv221112">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol71/main.html" title="페이지이동" target="_blank">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.471</em>'+
									'<strong>9+10월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2022_0910.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol69/" title="페이지이동" target="_blank">웹진보기1</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol70/" title="페이지이동" target="_blank">웹진보기2</a>'+
										'<a href="../pdf/220910_view.pdf" title="새창페이지" target="_blank" class="pv220910">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol69/main.html" title="페이지이동" target="_blank">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.470</em>'+
									'<strong>7+8월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2022_0708.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol67/" title="페이지이동" target="_blank">웹진보기1</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol68/" title="페이지이동" target="_blank">웹진보기2</a>'+
										'<a href="../pdf/220708_view.pdf" title="새창페이지" target="_blank" class="pv220708">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol67/main.php" title="페이지이동" target="_blank">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.469</em>'+
									'<strong>5+6월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2022_0506.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol65/" title="페이지이동" target="_blank">웹진보기1</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol66/" title="페이지이동" target="_blank">웹진보기2</a>'+
										'<a href="../pdf/220506_view.pdf" title="새창페이지" target="_blank" class="pv220506">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol65/main.php" title="페이지이동" target="_blank">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.468</em>'+
									'<strong>3+4월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2022_0304.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol63/" title="페이지이동" target="_blank">웹진보기1</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol64/" title="페이지이동" target="_blank">웹진보기2</a>'+
										'<a href="../pdf/220304_view.pdf" title="새창페이지" target="_blank" class="pv220304">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol63/main.php" title="페이지이동" target="_blank">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.467</em>'+
									'<strong>1+2월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2022_0102.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol61/" title="페이지이동" target="_blank">웹진보기1</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol62/" title="페이지이동" target="_blank">웹진보기2</a>'+
										'<a href="../pdf/220102_view.pdf" title="새창페이지" target="_blank" class="pv220102">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol61/main.php" title="페이지이동" target="_blank">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+						
					'</ul>'+
				'</div>'+
			'</div>'+

			'<h4 class="bbYear bookT tC000000">2021</h4>'+
			'<div class="bbl">'+
				'<div class="bbr">'+
					'<ul class="board_book">'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.466</em>'+
									'<strong>11+12월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2021_1112.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol59/" title="페이지이동">11월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol60/" title="페이지이동">12월 웹진보기</a>'+
										'<a href="../pdf/211112_view.pdf" title="새창페이지" target="_blank" class="pv211112">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol59/main.php" title="페이지이동">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.465</em>'+
									'<strong>09+10월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2021_0910.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol57/" title="페이지이동">9월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol58/" class=\"d2mTxt\" title=\"서비스예정\">10월 웹진보기</a>'+
										'<a href="../pdf/210910_view.pdf" title="새창페이지" target="_blank" class="pv210910">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol57/main.php" title="페이지이동">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.464</em>'+
									'<strong>07+08월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2021_0708.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol55/" title="페이지이동">7월 웹진보기</a>'+
										'<a href=\"void(0);\" onclick=\"alert(\'서비스 예정입니다.\');return false;\" class=\"d2mTxt\" title=\"서비스예정\">8월 웹진보기</a>'+
										'<a href="../pdf/210708_view.pdf" title="새창페이지" target="_blank" class="pv210708">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol55/main.php" title="페이지이동">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.463</em>'+
									'<strong>05+06월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2021_0506.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol53/" title="페이지이동">5월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol54/" title="페이지이동">6월 웹진보기</a>'+
										'<a href="../pdf/210506_view.pdf" title="새창페이지" target="_blank" class="pv210506">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol53/main.php" title="페이지이동">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.462</em>'+
									'<strong>03+04월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2021_0304.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol51/" title="페이지이동">3월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol52/" title="페이지이동">4월 웹진보기</a>'+
										'<a href="../pdf/210304_view.pdf" title="새창페이지" target="_blank" class="pv210304">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol51/main.php" title="페이지이동">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.461</em>'+
									'<strong>01+02월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2021_0102.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol49/" title="페이지이동">1월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol50/" title="페이지이동">2월 웹진보기</a>'+
										'<a href="../pdf/210102_view.pdf" title="새창페이지" target="_blank" class="pv210102">PDF보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/ebook/vol49/main.php" title="페이지이동">eBook보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+						
					'</ul>'+
				'</div>'+
			'</div>'+

			'<h4 class="bbYear bookT tC000000">2020</h4>'+
			'<div class="bbl">'+
				'<div class="bbr">'+
					'<ul class="board_book">'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.460</em>'+
									'<strong>11+12월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2020_1112.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol47/" title="페이지이동">11월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol48/" title="페이지이동">12월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.459</em>'+
									'<strong>09+10월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2020_0910.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol45/" title="페이지이동">9월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol46/" title="페이지이동">10월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.458</em>'+
									'<strong>07+08월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2020_0708.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol43/" title="페이지이동">7월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol44/" title="페이지이동">8월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.457</em>'+
									'<strong>05+06월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2020_0506.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol41/" title="페이지이동">5월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol42/" title="페이지이동">6월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.456</em>'+
									'<strong>03+04월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2020_0304.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol39/" title="페이지이동">3월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol40/" title="페이지이동">4월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.455</em>'+
									'<strong>01+02월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2020_0102.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol37/" title="페이지이동">1월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol38/" title="페이지이동">2월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
					'</ul>'+
				'</div>'+
			'</div>'+

			'<h4 class="bbYear bookT tC000000">2019</h4>'+
			'<div class="bbl">'+
				'<div class="bbr">'+
					'<ul class="board_book">'+						
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.454</em>'+
									'<strong>11+12월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2019_1112.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol35/" title="페이지이동">11월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol36/" title="페이지이동">12월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.453</em>'+
									'<strong>09+10월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2019_0910.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol33/" title="페이지이동">9월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol34/" title="페이지이동">10월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.452</em>'+
									'<strong>07+08월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2019_0708.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol31/" title="페이지이동">7월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol32/" title="페이지이동">8월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.451</em>'+
									'<strong>05+06월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2019_0506.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol29/" title="페이지이동">5월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol30/" title="페이지이동">6월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.450</em>'+
									'<strong>03+04월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2019_0304.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol27/" title="페이지이동">3월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol28/" title="페이지이동">4월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.449</em>'+
									'<strong>01+02월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2019_0102.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol25/" title="페이지이동">1월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol26/" title="페이지이동">2월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
					'</ul>'+
				'</div>'+
			'</div>'+

			'<h4 class="bbYear bookT tC000000">2018</h4>'+
			'<div class="bbl">'+
				'<div class="bbr">'+
					'<ul class="board_book">'+						
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.448</em>'+
									'<strong>11+12월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2018_1112.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol23/" title="페이지이동">11월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol24/" title="페이지이동">12월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.447</em>'+
									'<strong>09+10월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2018_0910.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol21/" title="페이지이동">9월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol22/" title="페이지이동">10월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.446</em>'+
									'<strong>07+08월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2018_0708.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol9/" title="페이지이동">7월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vo20/" title="페이지이동">8월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.445</em>'+
									'<strong>05+06월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2018_0506.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol7/" title="페이지이동">5월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol8/" title="페이지이동">6월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.444</em>'+
									'<strong>03+04월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2018_0304.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol15/" title="페이지이동">3월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol16/" title="페이지이동">4월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.443</em>'+
									'<strong>01+02월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2018_0102.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol13/" title="페이지이동">1월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol14/" title="페이지이동">2월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
					'</ul>'+
				'</div>'+
			'</div>'+

			'<h4 class="bbYear bookT tC000000">2017</h4>'+
			'<div class="bbl">'+
				'<div class="bbr">'+
					'<ul class="board_book">'+						
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.442</em>'+
									'<strong>11+12월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2017_1112.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol11/" title="페이지이동">11월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol12/" title="페이지이동">12월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.441</em>'+
									'<strong>09+10월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2017_0910.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol9/" title="페이지이동">9월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol10/" title="페이지이동">10월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.440</em>'+
									'<strong>07+08월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2017_0708.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol7/" title="페이지이동">7월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol8/" title="페이지이동">8월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.439</em>'+
									'<strong>05+06월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2017_0506.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol5/" title="페이지이동">5월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol6/" title="페이지이동">6월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.438</em>'+
									'<strong>03+04월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2017_0304.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol3/" title="페이지이동">3월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol4/" title="페이지이동">4월 웹진보기</a>'+
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
						'<li>'+
							'<div class="thumbImg">'+
								'<h5>'+
									'<em>Vol.437</em>'+
									'<strong>01+02월호</strong>'+
								'</h5>'+
								'<span class="bbImg">'+
									'<img src="../images/list/2017_0102.jpg" alt="" />'+
								'</span>'+
								'<p class="bbBtnWrap">'+
									'<span class="bbBtn">'+
										'<a href="http://news.koroad.or.kr/koroad/vol1/" title="페이지이동">1월 웹진보기</a>'+
										'<a href="http://news.koroad.or.kr/koroad/vol2/" title="페이지이동">2월 웹진보기</a>'+										
									'</span>'+
								'</p>'+
							'</div>'+
						'</li>'+
					'</ul>'+
				'</div>'+
			'</div>'+			
		'</div>'
	);
}

function pdfView(){
	var	pa210102 = $('.pv210102').attr('href'),
		pa210304 = $('.pv210304').attr('href'),
		pa210506 = $('.pv210506').attr('href'),
		pa210708 = $('.pv210708').attr('href'),
		pa210910 = $('.pv210910').attr('href'),
		pa211112 = $('.pv211112').attr('href'),
		pa220102 = $('.pv220102').attr('href'),
		pa220304 = $('.pv220304').attr('href'),
		pa220506 = $('.pv220506').attr('href'),
		pa220708 = $('.pv220708').attr('href'),
		pa220910 = $('.pv220910').attr('href');
		pa221112 = $('.pv221112').attr('href');
		pa230102 = $('.pv230102').attr('href');
		pa230304 = $('.pv230304').attr('href');
		pa230506 = $('.pv230506').attr('href');
		pa230708 = $('.pv230708').attr('href');
		pa230910 = $('.pv230910').attr('href');
		pa231112 = $('.pv231112').attr('href');
		pa240102 = $('.pv240102').attr('href');
		pa240304 = $('.pv240304').attr('href');
		pa240506 = $('.pv240506').attr('href');
		pa240708 = $('.pv240708').attr('href');
		pa240910 = $('.pv240910').attr('href');
		pa241112 = $('.pv241112').attr('href');

	var widthSize = 1299;

	if($(window).width() > widthSize){
		$('.pv210102').attr('href',pa210102.replace(/_view/,'_pc'));
		$('.pv210304').attr('href',pa210304.replace(/_view/,'_pc'));
		$('.pv210506').attr('href',pa210506.replace(/_view/,'_pc'));
		$('.pv210708').attr('href',pa210708.replace(/_view/,'_pc'));
		$('.pv210910').attr('href',pa210910.replace(/_view/,'_pc'));
		$('.pv211112').attr('href',pa211112.replace(/_view/,'_pc'));
		$('.pv220102').attr('href',pa220102.replace(/_view/,'_pc'));
		$('.pv220304').attr('href',pa220304.replace(/_view/,'_pc'));
		$('.pv220506').attr('href',pa220506.replace(/_view/,'_pc'));
		$('.pv220708').attr('href',pa220708.replace(/_view/,'_pc'));
		$('.pv220910').attr('href',pa220910.replace(/_view/,'_pc'));
		$('.pv221112').attr('href',pa221112.replace(/_view/,'_pc'));
		$('.pv230102').attr('href',pa230102.replace(/_view/,'_pc'));
		$('.pv230304').attr('href',pa230304.replace(/_view/,'_pc'));
		$('.pv230506').attr('href',pa230506.replace(/_view/,'_pc'));
		$('.pv230708').attr('href',pa230708.replace(/_view/,'_pc'));
		$('.pv230910').attr('href',pa230910.replace(/_view/,'_pc'));
		$('.pv231112').attr('href',pa231112.replace(/_view/,'_pc'));
		$('.pv240102').attr('href',pa240102.replace(/_view/,'_pc'));
		$('.pv240304').attr('href',pa240304.replace(/_view/,'_pc'));
		$('.pv240506').attr('href',pa240506.replace(/_view/,'_pc'));
		$('.pv240708').attr('href',pa240708.replace(/_view/,'_pc'));
		$('.pv240910').attr('href',pa240910.replace(/_view/,'_pc'));
		$('.pv241112').attr('href',pa241112.replace(/_view/,'_pc'));
	} else if($(window).width() <= widthSize) {
		$('.pv210102').attr('href',pa210102.replace(/_view/,'_m'));
		$('.pv210304').attr('href',pa210304.replace(/_view/,'_m'));
		$('.pv210506').attr('href',pa210506.replace(/_view/,'_m'));
		$('.pv210708').attr('href',pa210708.replace(/_view/,'_m'));
		$('.pv210910').attr('href',pa210910.replace(/_view/,'_m'));
		$('.pv220102').attr('href',pa220102.replace(/_view/,'_m'));
		$('.pv220304').attr('href',pa220304.replace(/_view/,'_m'));
		$('.pv220506').attr('href',pa220506.replace(/_view/,'_m'));
		$('.pv220708').attr('href',pa220708.replace(/_view/,'_m'));
		$('.pv220910').attr('href',pa220910.replace(/_view/,'_m'));
		$('.pv230102').attr('href',pa230102.replace(/_view/,'_m'));
		$('.pv230304').attr('href',pa230304.replace(/_view/,'_m'));
		$('.pv230506').attr('href',pa230506.replace(/_view/,'_m'));
		$('.pv230708').attr('href',pa230708.replace(/_view/,'_m'));
		$('.pv230910').attr('href',pa230910.replace(/_view/,'_m'));
		$('.pv231112').attr('href',pa231112.replace(/_view/,'_m'));
		$('.pv240102').attr('href',pa240102.replace(/_view/,'_m'));
		$('.pv240304').attr('href',pa240304.replace(/_view/,'_m'));
		$('.pv240506').attr('href',pa240506.replace(/_view/,'_m'));
		$('.pv240708').attr('href',pa240708.replace(/_view/,'_m'));
		$('.pv240910').attr('href',pa240910.replace(/_view/,'_m'));
		$('.pv241112').attr('href',pa241112.replace(/_view/,'_m'));
	}
	
	$(window).resize(function(){
		if($(window).width() > widthSize){
			$('.pv210102').attr('href',pa210102.replace(/_view/,'_pc'));
			$('.pv210304').attr('href',pa210304.replace(/_view/,'_pc'));
			$('.pv210506').attr('href',pa210506.replace(/_view/,'_pc'));
			$('.pv210708').attr('href',pa210708.replace(/_view/,'_pc'));
			$('.pv210910').attr('href',pa210910.replace(/_view/,'_pc'));
			$('.pv211112').attr('href',pa211112.replace(/_view/,'_pc'));
			$('.pv220102').attr('href',pa220102.replace(/_view/,'_pc'));
			$('.pv220304').attr('href',pa220304.replace(/_view/,'_pc'));
			$('.pv220506').attr('href',pa220506.replace(/_view/,'_pc'));
			$('.pv220708').attr('href',pa220708.replace(/_view/,'_pc'));
			$('.pv220910').attr('href',pa220910.replace(/_view/,'_pc'));
			$('.pv221112').attr('href',pa221112.replace(/_view/,'_pc'));
			$('.pv230102').attr('href',pa230102.replace(/_view/,'_pc'));
			$('.pv230304').attr('href',pa230304.replace(/_view/,'_pc'));
			$('.pv230506').attr('href',pa230506.replace(/_view/,'_pc'));
			$('.pv230708').attr('href',pa230708.replace(/_view/,'_pc'));
			$('.pv230910').attr('href',pa230910.replace(/_view/,'_pc'));
			$('.pv231112').attr('href',pa231112.replace(/_view/,'_pc'));
			$('.pv240102').attr('href',pa240102.replace(/_view/,'_pc'));
			$('.pv240304').attr('href',pa240304.replace(/_view/,'_pc'));
			$('.pv240506').attr('href',pa240506.replace(/_view/,'_pc'));
			$('.pv240708').attr('href',pa240708.replace(/_view/,'_pc'));
			$('.pv240910').attr('href',pa240910.replace(/_view/,'_pc'));
			$('.pv241112').attr('href',pa241112.replace(/_view/,'_pc'));
		} else if($(window).width() <= widthSize) {
			$('.pv210102').attr('href',pa210102.replace(/_view/,'_m'));
			$('.pv210304').attr('href',pa210304.replace(/_view/,'_m'));
			$('.pv210506').attr('href',pa210506.replace(/_view/,'_m'));
			$('.pv210708').attr('href',pa210708.replace(/_view/,'_m'));
			$('.pv210910').attr('href',pa210910.replace(/_view/,'_m'));
			$('.pv211112').attr('href',pa211112.replace(/_view/,'_m'));
			$('.pv220102').attr('href',pa220102.replace(/_view/,'_m'));
			$('.pv220304').attr('href',pa220304.replace(/_view/,'_m'));
			$('.pv220506').attr('href',pa220506.replace(/_view/,'_m'));
			$('.pv220708').attr('href',pa220708.replace(/_view/,'_m'));
			$('.pv220910').attr('href',pa220910.replace(/_view/,'_m'));
			$('.pv221112').attr('href',pa221112.replace(/_view/,'_m'));
			$('.pv230102').attr('href',pa230102.replace(/_view/,'_m'));
			$('.pv230304').attr('href',pa230304.replace(/_view/,'_m'));
			$('.pv230506').attr('href',pa230506.replace(/_view/,'_m'));
			$('.pv230708').attr('href',pa230708.replace(/_view/,'_m'));
			$('.pv230910').attr('href',pa230910.replace(/_view/,'_m'));
			$('.pv231112').attr('href',pa231112.replace(/_view/,'_m'));
			$('.pv240102').attr('href',pa240102.replace(/_view/,'_m'));
			$('.pv240304').attr('href',pa240304.replace(/_view/,'_m'));
			$('.pv240506').attr('href',pa240506.replace(/_view/,'_m'));
			$('.pv240708').attr('href',pa240708.replace(/_view/,'_m'));
			$('.pv240910').attr('href',pa240910.replace(/_view/,'_m'));
			$('.pv241112').attr('href',pa241112.replace(/_view/,'_m'));
		}
	});
}

//]]>