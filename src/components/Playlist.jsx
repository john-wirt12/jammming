import React, { useState } from 'react';

function Playlist(props) {
    const [ playlist, setPlaylist ] = useState({});

    return (
        <div>
            <h2>Playlist name here</h2>
            <ol>
                <li>song 1</li>
                <li>song 2</li>
                <li>song 3</li>
                <li>song 4</li>
                <li>song 5</li>
                <li>song 6</li>
                <li>song 7</li>
            </ol>
        </div>
    )
}

export default Playlist