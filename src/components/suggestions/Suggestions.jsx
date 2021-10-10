import React from 'react';
import './Suggestions.css';
import Suggestion from './suggestion/Suggestion';

const suggestions = require('@rstacruz/startup-name-generator');

function Suggestions(props){
    // console.log(props.keyword);
    console.log(suggestions(props.keyword));

    return (
        <div class="suggestions">
        {props.keyword.length!==0&&suggestions(props.keyword).map((suggestion) =>
        <Suggestion suggestion={suggestion}/>
        )}
        </div>
    )
}

export default Suggestions;