import React from 'react'
import "./Result.css";
export default function () {
    return (
        <div>
            <h1 className='heading'>RESULTS</h1>

            <p className='content'>The best model for churn rate prediction is XGBClassifier on Data Balanced using SMOTE. As train accuracy is 0.99 , test accuracy is 0.82 and test recall score is 0.87 which is highest among all.
            </p>
            <div className='res_image'>
                <img className='res_1' src={process.env.PUBLIC_URL + "images/result_1.png"} alt="" />
                <img className='res_1' src={process.env.PUBLIC_URL + "images/result_2.png"} alt="" />
                <img className='res_3' src={process.env.PUBLIC_URL + "images/result_3.png"} alt="" />
                <h3 className="subpart_titles res_title" >XGBClassifier on Data Balanced using SMOTE</h3>
            </div>
        </div>
    )
}
