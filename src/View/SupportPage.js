import React, { useState } from 'react';
import '../css/SupportPage.css';
import datalist from '../tempDataFolder/support_list.js';
import Accordion from '../Component/Accordion.js';

function SupportPage() {

  let [active, setActive] = useState("");

  return (
    <section className="conbox">
      <div className="title">
        <h2>고객센터</h2>
        <p>문의 전 <span>자주 묻는 질문</span>을 확인해 주세요! <br/>
        쉽고 빠르게 원하는 내용을 찾아보고 문의를 해결할 수 있습니다.</p>
      </div>

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

        <Accordion title="1" active={active} setActive={setActive}></Accordion>
        <Accordion title="2" active={active} setActive={setActive}></Accordion>
        <Accordion title="3" active={active} setActive={setActive}></Accordion>
        <Accordion title="4" active={active} setActive={setActive}></Accordion>
        
      </section>
    </section>
  )
}

export default SupportPage;
