import React from "react";

const defImg = "https://via.placeholder.com/215"

function About({image=defImg, about }){
    return (
        <>
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
        </>
    )
}

export default About;