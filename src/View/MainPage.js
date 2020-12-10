import { useState } from 'react';
import '../css/MainPage.css';
//Component
import Items from '../Component/Item';

import best_item_list from '../tempDataFolder/best_item_list.js';

function MainPage() {

  let itemlist = best_item_list;
  let lastNum = itemlist.length;
  let count = 3;
  let element = document.getElementsByClassName('bestitem');
  let btn_more = document.getElementsByClassName('btn-more');

  function buttonClick1() {
    element[0].style.height = element[0].clientHeight + 470 + "px";
    count += 3;

    if (count >= lastNum)
      btn_more[0].style.display = "none";
  }

  return (
    <section className="mainview-wrap">
      <div className="banner">
        <div><span>뭔가가 필요해~</span></div>
      </div>
      <h2>베스트 상품</h2>
      <section className="bestitem">
        <Items list={itemlist}></Items>
      </section>
      <button className="btn-more" onClick={ buttonClick1 }>더보기</button>

    </section>
  )
}

export default MainPage;
