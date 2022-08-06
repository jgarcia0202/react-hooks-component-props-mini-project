import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"
//import Article from "./Article"
console.log(blogData);

function App() {
  //console.log(blogData)
  return (
    <>
    <Header blogName={blogData.name} ></Header>
    <About image={blogData.image} about={blogData.about}></About>
    <ArticleList posts={blogData.posts}></ArticleList>
    </>
    /*<div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div> */
    
  );
}

export default App;
