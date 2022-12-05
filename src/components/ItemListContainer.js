import React, { useEffect, useState } from "react";
import Data from "./data.json";



const Itemlistcontainer = () => {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((obj) => setPosts(obj));
            
            
    }, []);

    return (
        <div>
            {posts.map(post =>
                <div>
                    <p>{post.nombre}</p>
                    <p>{post.precio}</p>
                </div>
            )}
        </div>
    )
}


export default Itemlistcontainer;