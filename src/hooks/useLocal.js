import { useCallback, useEffect, useState } from 'react'

function useLocal(key, initialValue) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    useEffect(() => {
        if (value === undefined) return localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue, remove];
}

export default useLocal