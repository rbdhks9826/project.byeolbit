import React from 'react';
import '../css/Accordion.css';

const Accordion = (props)=>{
  return (
    <div className="accordion-wrap">
      <div className="accordion-header">
        <div className="container">
          <h4 onClick={() => props.setActive(props.title) }><span>Q1</span>{props.title}</h4>
        </div>
      </div>


      <div className={"accordion-content" + (props.active === props.title ? " show" : "" )}>
        <div className="container">
          <p>도서와 관련된 실습 소스는 받을 수 있나요?</p>
        </div>
      </div>

    </div>
  )
}

export default Accordion;
