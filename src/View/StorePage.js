import React, { useState } from 'react';
import '../css/StorePage.css';

function StorePage() {
  return (
    <section className="content-wrap">
      <div className="main-photo">
        <div className="text">
          <h2>별빛담은</h2>
          <p>맑은 시골하늘의<br/>
             별빛을 담은 장</p>
        </div>
      </div>

      <div className="item-nav-wrap">
        <div className="item-nav">
          <ul>
            <li>청국장</li>
            <li>된장</li>
            <li>고추장</li>
            <li>간장</li>
            <li>장아찌</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default StorePage;
