import { useEffect, useState } from 'react';

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetchFunc();
                setResponse(response);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);
    return { response: response, error: error, loading: loading };
};
