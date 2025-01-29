import React, { useState } from 'react';

function Track(props) {
    const [ track, setTrack ] = useState('');

    return (
        <>
            <h2>Track interface here</h2>
            <button>previous</button>
            <p>Name of song playing</p>
            <button>pause</button>
            <button>next</button>
        </>
    )
}

export default Track;