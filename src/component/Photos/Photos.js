import React, { useEffect, useState } from 'react';
import PhotoDetails from '../PhotoDetails/PhotoDetails';

const Photos = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    return (
        <div>
            <h2>Online API Photos Generator {photos.length}</h2>
            <hr />
            {
                photos.map(photo=><PhotoDetails
                key={photo.id}
                photo={photo}
                ></PhotoDetails>)
            }
        </div>
    );
};

export default Photos;