import React, { useState } from 'react';

function Tracklist(props) {
    const [ tracklist, setNextTrack ] = useState({});

    return (
        <>
            <h2>Track: {props.track.album}</h2>
            <h3>Artist: {props.track.artistName}</h3>
            <ol>
                {props.track.trackName.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ol>
        </>
    )
}

export default Tracklist;