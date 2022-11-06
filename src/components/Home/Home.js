import React from "react";
import "./Home.css";
import Header from "../../Subcomponents/Header/Header.js";
import { Link } from "react-router-dom";
export default function Home() {
    const x=<Link to="/EDA" className="link">EDA</Link>
    const y=<Link to="/Model" className="link">Models</Link>
    return <div className="cont">
        <h1 className="heading">Customer Churn Rate Predictor</h1>
        <div className="main_screen">
            <Header title={x} Read={'Exploratory Data Analysis (EDA) is an approach to analyze the data using visual techniques. It is used to discover trends, patterns, or to check assumptions with the help of statistical summary and graphical representations'} />

            <Header title={y} Read={'We have used 5 different ML Models: SVM Without Class Balancing, SVM - Class balanced using class weights, Random Forest, XGBClassifier on Data Balanced using Scale_Pos, XGBClassifier on Data Balanced using SMOTE'} />

            <div className="result">
                <h1 className="res"><Link to="/Result" className="link">Result</Link></h1>
            </div>
        </div>
        </div>
}