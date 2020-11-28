import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <section className="wrap">
        <h1>별빛담은</h1>
        <header>
          <section className="header-nav">
            <div className="logo_box">
              <strong>별빛담은</strong>
              <img src="./stamp.png"/>
            </div>

            <nav className="nav_list">
              <ul className="nav_list_top">
                <li data-rol="menu1"><a href="#">이벤트</a></li>
                <li data-rol="menu2"><a href="#">공지사항</a></li>
                <li data-rol="menu3"><a href="#">이용가이드</a></li>
                <li data-rol="menu4"><a href="#">로그인</a></li>
                <li data-rol="menu4"><a href="#">회원가입</a></li>
              </ul>

              <ul className="nav_list_bottom">
                <li data-rol="menu1"><a href="#">온라인스토어</a></li>
                <li data-rol="menu2"><a href="#">브랜드스토리</a></li>
                <li data-rol="menu3"><a href="#">리뷰</a></li>
                <li data-rol="menu4"><a href="#">고객센터</a></li>
                <li data-rol="menu4"><a href="#">장바구니</a></li>
                <li data-rol="menu4"><a href="#">메뉴</a></li>
              </ul>
            </nav>
          </section>
        </header>
        <section id="container">
          <section className="best_items">
            <h2>베스트 상품</h2>
            <ul className="item_list_wrap">
              <li className="item_list">
                <div className="item">
                  <img src="./stamp.png"/>
                </div>
                <div className="description">
                  <h6>초신선 돼지 삼겹살 구이용</h6>
                  <p>기준가 15,300원/600g<br/>
                    (100g당 2,550원)
                  </p>
                </div>
              </li>
              <li className="item_list">
                <div className="item">
                  <img src="./stamp.png"/>
                </div>
                <div className="description">
                  <h6>초신선 돼지 삼겹살 구이용</h6>
                  <p>기준가 15,300원/600g<br/>
                    (100g당 2,550원)
                  </p>
                </div>
              </li>
              <li className="item_list">
                <div className="item">
                  <img src="./stamp.png"/>
                </div>
                <div className="description">
                  <h6>초신선 돼지 삼겹살 구이용</h6>
                  <p>기준가 15,300원/600g<br/>
                    (100g당 2,550원)
                  </p>
                </div>
              </li>
            </ul>
            <ul className="item_list_wrap">
              <li className="item_list">
                <div className="item">
                  <img src="./stamp.png"/>
                </div>
                <div className="description">
                  <h6>초신선 돼지 삼겹살 구이용</h6>
                  <p>기준가 15,300원/600g<br/>
                    (100g당 2,550원)
                  </p>
                </div>
              </li>
              <li className="item_list">
                <div className="item">
                  <img src="./stamp.png"/>
                </div>
                <div className="description">
                  <h6>초신선 돼지 삼겹살 구이용</h6>
                  <p>기준가 15,300원/600g<br/>
                    (100g당 2,550원)
                  </p>
                </div>
              </li>
              <li className="item_list">
                <div className="item">
                  <img src="./stamp.png"/>
                </div>
                <div className="description">
                  <h6>초신선 돼지 삼겹살 구이용</h6>
                  <p>기준가 15,300원/600g<br/>
                    (100g당 2,550원)
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
