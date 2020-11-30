import Reack, { useState } from 'react';
import '../css/SupportPage.css';



function SupportPage() {
  return (
    <section className="conbox">
      <h2>고객센터</h2>
      <section className="content_wrap">

        <div className="nav">
          <h3 className="tit_faq">
            <strong>자주 묻는 질문</strong>
            <ul>
              <li>상품관련</li>
              <li>주문/결제</li>
              <li>배송</li>
              <li>취소/교환/환불</li>
            </ul>
          </h3>
        </div>

        <div className="accordio_box">
          <ol>
            <li className="on">
              <h4><span>Q1</span>도서와 관련된 실습 소스는 받을 수 있나요?</h4>
              <p><a href="http://www.easyspub.co.kr/30_Menu/DataList/PUB" target="_blank">이지스퍼블리싱 자료실</a>에서 로그인한 후 다운로드할 수 있습니다.<br /> 원하는 도서명을 검색하여 도서와 관련된 추가 자료를 다운로드할 수 있습니다.</p>
            </li>
            <li>
              <h4><span>Q2</span>동영상 강의가 있나요?</h4>
              <p><a href="http://www.easyspub.co.kr/50_Menu/VideoList/PUB" target="_blank">이지스퍼블리싱</a>에서 도서와 관련된 동영상을 볼 수 있습니다. 원하는 도서명으로 검색하여 사용할 수 있습니다.</p>
            </li>
            <li>
              <h4><span>Q3</span>책은 어디서 구매하나요?</h4>
              <p>메뉴의 도서소개 &#62; 원하는 책으로 이동 &#62; 구매 사이트로 바로 연결됩니다.</p>
            </li>
            <li>
              <h4><span>Q4</span>문의사항은 어디에 남기면 되나요?</h4>
              <p>메뉴의 Contact Us 페이지에서 보낼 수 있습니다.</p>
            </li>
          </ol>
        </div>
      </section>
    </section>
  )
}

export default SupportPage;
