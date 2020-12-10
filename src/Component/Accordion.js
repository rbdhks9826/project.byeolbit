import React from 'react';
import '../css/Accordion.css';

const Accordion = (props)=>{
  return (
    <div className="accordion-wrap">
      <div className="accordion-header">
        <div className="title-container">
          <h4>{props.data.title}</h4>
          <span onClick={() => props.setActive(props.data.id) }>{props.data.question}</span>
        </div>
      </div>


      <div className={ "accordion-content" + (props.active === props.data.id ? " show" : "" )}>
        <div className="content-container">
          <p>{props.data.content}</p>
        </div>
      </div>

    </div>
  )
}

export default Accordion;
