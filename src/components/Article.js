import React from "react";
const defDt = "January 1, 1970"
let str = ''

function Article({title, date = defDt, preview, minutes}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}• {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )

}

export default Article;