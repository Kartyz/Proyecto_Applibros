import React from 'react';
import { Link } from 'react-router-dom';

import "./Books.css";
const Books=({show,item,onClose})=>{
    
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h3>{item.volumeInfo.title}</h3>
                            <h2>{item.volumeInfo.authors}</h2>
                            <Link to={"/chat"} >
                                <button>Chat</button>
                            </Link>
                                <button className="solicitar">Solicitar</button>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}


export default Books;
