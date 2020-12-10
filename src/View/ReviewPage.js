import { useState } from 'react';
import '../css/ReviewPage.css';
import ReviewBox from '../Component/ReviewBox';
import reviewList from '../tempDataFolder/review_list.js';

function ReviewPage() {

  let arr = reviewList;

  return (
    <div className="review-wrap">
      <ul>
        {
          arr.map((item, i)=>{
            return <ReviewBox list={item} key={i}></ReviewBox>
          })

        }
      </ul>
    </div>
  )
}

export default ReviewPage;
