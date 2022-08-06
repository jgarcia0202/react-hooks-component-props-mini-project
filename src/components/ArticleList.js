import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    let art = posts.map(post => {
        return(
            <Article key={post.id} 
            title={post.title} 
            date={post.date} 
            preview={post.preview}
            minutes={post.minutes}></Article>
        )})
    return(
        <>
        <main>
            {art}
        </main>
        </>
    )

}

export default ArticleList;