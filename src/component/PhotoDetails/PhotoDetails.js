import React from 'react';
import { addToCard } from '../../localStorage/localStorage';

const PhotoDetails = (props) => {
    const {title,id}=props.photo
    const addedItem=(id)=>{
        addToCard(id)
    }
    return (
        <div style={{"border":"2px solid red","padding":'20px',"margin":"20px"}}>
            <h1>ID:{id}</h1>
            <h2>{title}</h2>
            <button onClick={()=>addedItem(id)}>Added Item</button>
        </div>
    );
};

export default PhotoDetails;