import React from 'react'
import "./Models.css";
export default function Model2() {
  return (
    <div className='m'>
        <h1 className='heading'>SVM - Class balanced using class weights </h1>
        <div className='models_images'>
            <img className='model_img' src={process.env.PUBLIC_URL + "images/model_2_1.png"} alt=""/>
            <img className='model_img' src={process.env.PUBLIC_URL + "images/model_2_2.png"} alt=""/>
        </div>
    </div>
  )
}
