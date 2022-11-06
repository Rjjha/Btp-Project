import React from 'react'
import "./Model.css"
import {Link} from "react-router-dom";
export default function Model() {
  return (
    <div className='Model'>
         <div className='navbar'>
            <ul className='first'>
                <li><Link to="/" className='link'>Home</Link></li>
            </ul>
            <ul className='second'>
                <li><Link to="/Result" className='link'>Find Results</Link></li>
                <li>Data</li>
            </ul>
         </div>

        <div className="screen">
            <div className="div">
                <h3 className="div_content"><Link to="/model1" className='link'>SVM Without Class Balancing</Link></h3>
            </div>
            <div className="div">
                <h3 className="div_content"><Link to="/model2" className='link'>SVM - Class balanced using class weights</Link></h3>
            </div>
            <div className="div">
                <h3 className="div_content"><Link to="/model3" className='link'>Random Forest</Link></h3>
            </div>
            <div className="div">
                <h3 className="div_content"><Link to="/model4" className='link'>XGBClassifier on Data Balanced using Scale_Pos</Link></h3>
            </div>
            <div className="div">
                <h3 className="div_content"><Link to="/model5" className='link'>XGBClassifier on Data Balanced using SMOTE</Link></h3>
            </div>
        </div>
    </div>
  )
}
