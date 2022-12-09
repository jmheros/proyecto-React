import React, { useEffect, useState } from "react";
import "./itemlistcontainer.css";
import Item from "./Item";


const Itemlistcontainer = () => {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('../data.json')
            .then((res) => res.json())
            .then((obj) => setPosts(obj));
            
            
    }, []);

    return (
        <div className="itemlist">
            {posts.map(post =>
                <div className="cartas" key={post.id} >
                <div className="card-container">
                    <div className="card-container__img-product">
                    <img src= {post.imagen} alt=""/>
                </div>
                <div className="card-container__titulo">
                    <h2> {post.nombre} </h2>
                    <h3> {post.genero} </h3>
                    <h4> {post.color} </h4>
                </div>
                
                <p>${post.precio} </p>
                
                </div>
                
                </div>
            )}
        </div>
    )
}


export default Itemlistcontainer;