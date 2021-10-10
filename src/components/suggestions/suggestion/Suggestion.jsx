import React from "react";
import './Suggestion.css';

function Suggestion(props){
    return (
        <a href={"https://www.namecheap.com/domains/registration/results/?domain="+props.suggestion} target="_blank">
        <div className="suggestion">
            {props.suggestion}
        </div>
        </a>
    )
}

export default Suggestion;