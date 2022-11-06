import React from 'react'
import "./Models.css";
export default function Model3() {
  return (
    <div className='m'>
        <h1 className='heading'>Random Forest </h1>
        <div className='models_images'>
            <img className='model_img' src={process.env.PUBLIC_URL + "images/model_3_1.png"} alt=""/>
            <img className='model_img' src={process.env.PUBLIC_URL + "images/model_3_2.png"} alt=""/>
        </div>
    </div>
  )
}
