import React from 'react'
import "./Models.css";
export default function Model5() {
  return (
    <div className='m'>
        <h1 className='heading'>XGBClassifier on Data Balanced using SMOTE</h1>
        <div className='models_images'>
            <img className='model_img' src={process.env.PUBLIC_URL + "images/model_5_1.png"} alt=""/>
            <img className='model_img' src={process.env.PUBLIC_URL + "images/model_5_2.png"} alt=""/>
        </div>
    </div>
  )
}
