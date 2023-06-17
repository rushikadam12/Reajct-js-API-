import React from 'react';

const Card=(props)=>{
    return(
    <>
<div className="card" style={{width:'18rem'}}>
  <img src={props.imgURL} className="card-img-top" alt="waifu"/>
  <div className="card-body">
    <p className="card-text">Hello!!!!!!!!!!!!!!!!!!!</p>
  </div>
</div>
  </>
  );
}
export default Card;