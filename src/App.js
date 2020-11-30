/*eslint-disable*/

import Reack, { useState } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

import best_item_list from './best_item_list.js';
//Component
import EventPage from './Component/EventPage';
import NoticePage from './Component/NoticePage';
import GuidePage from './Component/GuidePage';
import LoginPage from './Component/LoginPage';
import SignupPage from './Component/SignupPage';
import StorePage from './Component/StorePage';
import BrandPage from './Component/BrandPage';
import ReviewPage from './Component/ReviewPage';
import SupportPage from './Component/SupportPage';
import CartPage from './Component/CartPage';
import MenuPage from './Component/MenuPage';

function App() {

  let [_bList, bList] = useState(best_item_list);


  return (
    <div className="App">
      <section className="wrap">
        <h1>별빛담은</h1>
        <header>
          <section className="header-nav">
            <div className="logo_box">
              <strong><Link to="/">별빛담은</Link></strong>
              <img src="./stamp.png"/>
            </div>

            <nav className="nav_list">
              <ul className="nav_list_top">
                <li><Link to="/event">이벤트</Link></li>
                <li><Link to="/notice">공지사항</Link></li>
                <li><Link to="/guide">이용가이드</Link></li>
                <li><Link to="/login">로그인</Link></li>
                <li><Link to="/signup">회원가입</Link></li>
              </ul>

              <ul className="nav_list_bottom">
                <li><Link to="/store">온라인스토어</Link></li>
                <li><Link to="/brandstory">브랜드스토리</Link></li>
                <li><Link to="/review">리뷰</Link></li>
                <li><Link to="/support">고객센터</Link></li>
                <li><Link to="/cart">장바구니</Link></li>
                <li><Link to="/menu">메뉴</Link></li>
              </ul>
            </nav>
          </section>
        </header>

        <Switch>
          <Route exact path="/">
            <section id="container">
              <section className="banner">
                <div><span>뭔가가 필요해~</span></div>
              </section>
              <section className="best_items">
                <h2>베스트 상품</h2>
                <ul className="item_list_wrap">
                  {
                    _bList.map((item, i)=>{
                      return <BestItem _bList={item} key={i}/>
                    })
                  }
                </ul>
              </section>
            </section>
          </Route>

          <Route path="/event">
            <EventPage></EventPage>
          </Route>

          <Route path="/notice">
            <NoticePage></NoticePage>
          </Route>

          <Route path="/guide">
            <GuidePage></GuidePage>
          </Route>

          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>

          <Route path="/signup">
            <SignupPage></SignupPage>
          </Route>

          <Route path="/store">
            <StorePage></StorePage>
          </Route>

          <Route path="/brandstory">
            <BrandPage></BrandPage>
          </Route>

          <Route path="/review">
            <ReviewPage></ReviewPage>
          </Route>

          <Route path="/support">
            <SupportPage></SupportPage>
          </Route>

          <Route path="/cart">
            <CartPage></CartPage>
          </Route>

          <Route path="/menu">
            <MenuPage></MenuPage>
          </Route>

        </Switch>

      </section>
    </div>
  );
}


function BestItem(props){
  return (
    <li className="item_list">
      <div className="item">
        <img src={props._bList.sumnail}/>
      </div>
      <div className="description">
        <h6>{ props._bList.subname }</h6>
        <p>{ props._bList.price }<br/>
          (100g당 1,250원)
        </p>
      </div>
    </li>
  )
}

export default App;
