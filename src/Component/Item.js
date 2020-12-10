import { useState } from 'react';
import '../css/Item.css';

function Items(props) {

    let itemlist = props.list;
    let title = props.title;

    return (
      <div className="items">

        <ul className="item_list_wrap">
          {

            itemlist.map((item, i)=>{
              if(title === "전체보기")
                return <Item item={item} key={i}/>

              if(title !== undefined){
                if(item.name === title)
                  return <Item item={item} key={i}/>
              }
              else{
                return <Item item={item} key={i}/>
              }
            })
          }
        </ul>
      </div>
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
