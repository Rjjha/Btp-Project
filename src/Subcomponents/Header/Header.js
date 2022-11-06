import React, { useState } from "react";
import "./Header.css";
export default function Header(props) {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <p className="para"> {props.Read}
        </p>
    </div>
    const linkName = readMore ? 'Read Less' : 'Read More '
    return <>
        <div className="part">
            <h1 className="title">{props.title}</h1>
            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{linkName}</h2></a>
            {readMore && extraContent}
        </div>
    </>

}