import React, { useState } from 'react';

export function MainEl() {
    const [apis, setApis ] = useState([{name: 'Google Maps', id: 1}, {name: 'Ninja Apis', id: 2}]);;
    const [count, setCount ] = useState(0)
    return (
        <main>
            <h1>Well hello there!</h1>
            <ul className="grid grid-list">
                {apis.map((api) => {
                    // console.log(api.id)
                    return (
                    <li className='grid-item' key="{api.id}">
                        <p>{api.name}</p>
                        <button className="btn" onClick={() => setCount((prev) => prev + 1)}>{count}</button>
                    </li>   
                )
                })}
            </ul>
        </main>
    )
}