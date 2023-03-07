import React from 'react'
import useSession from '../useSession';

function SessionComponent() {
    const [name, setName, removeName] = useSession("name");

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

export default SessionComponent