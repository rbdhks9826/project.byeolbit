import { useState } from 'react';
import '../css/Item.css';

function Items(props) {

    let itemlist = props.list;

    return (
      <section className="items">
        
        <ul className="item_list_wrap">
          {
            itemlist.map((item, i)=>{
              return <Item item={item} key={i}/>
            })
          }
        </ul>
      </section>
    )
}

function Item(props){
  return (
    <li className="item_list">
      <div className="item">
        <img src={props.item.sumnail}/>
      </div>
      <div className="description">
        <h6>{ props.item.subname }</h6>
        <p>{ props.item.price }<br/>
          (100g당 1,250원)
        </p>
      </div>
    </li>
  )
}

export default Items;
