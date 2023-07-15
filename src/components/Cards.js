import React from 'react'
import { useState } from 'react';
import "../style.css"

import { Catdata } from './Catdata'
// import imt from "./"
// import img12 from "../images/cat1.webp"
// import img1 from "../images/cat1.webp"
export default function Cards(props) {
  const [imgError, setImgError] = React.useState(false);

  // const imageonErr= (e)=>{
  //   e.currentTarget.src="./images/imageerr";
  //   e.currentTarget.className="error";

  // }
  return (
    <div className='cards'>
        {
          Catdata.map((obj) => {

            return (
              <>
        <ul>
          {/* <li>{<img className='cat-img' src={obj.image}/>}</li> */}
          <li>{<img className='cat-img'
  src={obj.image}
  onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src="./images/imageerr.jpg";
  }}
/>}</li>
          <li>The name of cat is: <span>{obj.name}</span></li>
          <li>His/her age is : <span>{obj.age}</span></li>
          <li>His/her owner is : <span>{obj.owner}</span></li>
        </ul>
              </>
            )
          }
          )}
    </div>
  )
}
