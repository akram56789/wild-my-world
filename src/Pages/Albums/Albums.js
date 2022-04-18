import React, { useEffect, useState } from 'react';
import Album from '../Album/Album';

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('album.json')
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, [])
    return (

        <div id="albums" className='container'>
            <div className="row ">
                <h1 className='services-title mt-5'> My Albums 🖼</h1>
                <div className="services-container">
                    {
                        albums.map(album => <Album
                            key={album.id}
                            album={album}


                        ></Album>)
                    }
                </div>
            </div>
        </div>


    );
};

export default Albums;