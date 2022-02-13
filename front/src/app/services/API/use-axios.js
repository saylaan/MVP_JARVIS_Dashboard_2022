import axios from 'axios'
import authHeader from "./Auth/auth-header";
// import { useState, useEffect } from 'react';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// export const useAxios = (axiosParams) => {
//     const [response, setResponse] = useState(undefined);
//     const [error, setError] = useState('');
//     const [loading, setloading] = useState(true);

//     const fetchData = async (params) => {
//       try {
//        const result = await axios.request(params);
//        setResponse(result.data);
//        } catch( error ) {
//          setError(error);
//        } finally {
//          setLoading(false);
//        }
//     };

//     useEffect(() => {
//         fetchData(axiosParams);
//     }, []); // execute once only

//     return { response, error, loading };
// };
export default () => {
    return axios.create({
        baseURL: 'http://localhost:8080/',
        // baseURL: 'http://localhost:8080/api/',
        headers: authHeader() 
    })
}


// export default useAxios;

