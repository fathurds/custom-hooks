import { useCallback, useEffect, useState } from 'react'

function useSession(key, initialValue) {
    const [value, setValue] = useState(() => {
        const storedValue = sessionStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    useEffect(() => {
        if (value === undefined) return sessionStorage.removeItem(key);
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue, remove];
}

export default useSession