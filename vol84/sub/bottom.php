            <!-- Top(공통) -->
            <div class="fixBtn">
                <button class="print" onclick="window.print(); return false;"><span>인쇄하기</span></button>
                <button class="share" id="sh-link"><span>공유하기</span></button>
                <button class="uptop"><span>TOP</span></button>
            </div>
             <!-- 검색 -->
            <div class="searchArea">
                <div class="wrap">
                    <!-- 검색어입력영역 -->
                    <form class="searchForm" action="<?=$threeSubDepth?>search.php">
                        <div class="inputWrap">
                            <input type="text" name="q" id="tipue_search_input" placeholder="검색어를 입력 해 주세요">
                            <button type="submit" class="searchBtn"><img src="<?=$twoDepth?>images/common/search.png" alt=""></button>
                        </div>
                    </form>
                </div>
            </div>