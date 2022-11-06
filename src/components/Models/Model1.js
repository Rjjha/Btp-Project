import React from 'react'
import "./Models.css";
export default function Model1() {
  return (
    <div className='m'>
        <h1 className='heading'>SVM Without Class Balancing </h1>
       <div className='models_images'>
       <img className='model_img' src={process.env.PUBLIC_URL + "images/model_1_1.png"} alt="" />
       <img className='model_img' src={process.env.PUBLIC_URL + "images/model_1_2.png"} alt="" />
       </div>
    </div>
  )
}
