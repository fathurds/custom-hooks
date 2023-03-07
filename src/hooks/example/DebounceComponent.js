import axios from 'axios';
import React, { useState } from 'react'
import useDebounce from '../useDebounce';

function DebounceComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // DeBounce Function
    useDebounce(async () => {
        setIsLoading(true);

        const config = {
            headers: {
                "Authorization": `Token MASUKAN_TOKEN_DISINI`
            }
        }
        if (searchTerm.length > 0) {
            const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}&per_page=5`, config);
            setUsers(response.data.items);
        }
        if (searchTerm.length === 0) {
            setUsers([]);
        }

        setIsLoading(false);
    }, [searchTerm], 1000);

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user, i) => (
                        <li key={i}>{user.login}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DebounceComponent