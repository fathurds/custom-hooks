import React from 'react'
import useLocal from '../useLocal'

function LocalComponent() {
    const [name, setName, removeName] = useLocal('name');

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name ? name : ""} onChange={handleChange} />
            <p>Hello, {name}!</p>
            <button onClick={removeName}>Remove</button>
        </div>
    );
}

export default LocalComponent