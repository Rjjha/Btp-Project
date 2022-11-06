import "./EDA.css";

export default function EDA() {
    return <div className="EDA">
        <h1 className="Heading">Exploratory Data Analysis(EDA)</h1>

        <div className="container">
            <img className="main_image" src={process.env.PUBLIC_URL + "images/main_image.jpeg"} alt="" />
            <h3 className="titles"> Churned vs Not Churned</h3>
        </div>
        <h2 className="subhead">Visualizing the distribution of some features</h2>
        <div className="sub">
            <div className="subpart">
                <img className="subpart_image" src={process.env.PUBLIC_URL + "images/image_1.jpeg"} alt="" />
                <h3 className="subpart_titles"> PDF account length for both the class labels
                </h3>
            </div>
            <div className="subpart">
                <img className="subpart_image" src={process.env.PUBLIC_URL + "images/image_2.jpeg"} alt="" />
                <h3 className="subpart_titles"> PDF of day charge for both the class labels
                </h3>
            </div>
            <div className="subpart">
                <img className="subpart_image" src={process.env.PUBLIC_URL + "images/image_3.jpeg"} alt="" />
                <h3 className="subpart_titles"> PDF of no_vmail_charge for both the class labels

                </h3>
            </div>
        </div>
    </div>
}