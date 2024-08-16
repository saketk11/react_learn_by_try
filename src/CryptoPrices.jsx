// import React, {useState, useEffect} from "react";
// // import { Axios } from "axios";
// import axios from "axios";

// const CryptoPrices = () => {
//     const [currencies, setCurrencies] = useState({});
//     const [loading, setLoading] = useState(false);

//     const getCurrencyList = () => {
//         setLoading(true);
//         axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
//         .then(response => {
//             // console.log(response);
//             setCurrencies(response.data.data);
//             setLoading(false);
//         }).catch(error => {
//             console.log(error);
//             setLoading(false);
//         })
//     }

//     useEffect(() => {
//         getCurrencyList();
//         console.log(currencies);
//     }, []);

//     return (
//         <>
//         <h2>Curreny List</h2>
//         {currencies.length > 0 && 
//             <table style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "4px"}}>
//                 <thead>
//                     <tr>
//                         <th>Nation</th>
//                         <th>Population</th>
//                         <th>Year</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {currencies.map((item, index) => {
//                         return (
//                             <tr key={index}>
//                                 <td>{item.Nation}</td>
//                                 <td>{item.Population}</td>
//                                 <td>{item.Year}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         }
//         </>
//     );
// }

// export default CryptoPrices;

import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoPrices = () => {
    // State for storing prices, loading status, and error messages
    const [prices, setPrices] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch cryptocurrency prices
    const fetchPrices = async (source) => {
        try {
            // Fetch data from Coingecko API
            const { data } = await axios.get(
                // 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd',
                'https://fakestoreapi.com/products',
                { cancelToken: source.token } // Attach cancel token for cleanup
            );
            // Update state with fetched data
            setPrices(data);
            setLoading(false); // Set loading to false once data is fetched
        } catch (err) {
            // Handle errors
            if (axios.isCancel(err)) return; // Ignore cancel errors
            setError("Failed to fetch prices"); // Set error state if fetch fails
            setLoading(false); // Set loading to false on error
        }
    };

    useEffect(() => {
        // Create a cancel token to handle component unmounting
        const source = axios.CancelToken.source();
        
        // Fetch data immediately when component mounts
        // fetchPrices(source);

        // Set up an interval to fetch data every 10 seconds
        // const interval = setInterval(() => fetchPrices(source), 10000);

        // Cleanup function to be called on component unmount
        // return () => {
        //     clearInterval(interval); // Clear the interval
        //     source.cancel("Component unmounted, request canceled."); // Cancel any ongoing request
        // };
    }, []); // Empty dependency array ensures this effect runs only on mount and unmount

    return (
        <>
            <h2>Cryptocurrency Prices</h2>
            {/* Display loading message while data is being fetched */}
            {loading && <p>Loading...</p>}
            {/* Display error message if fetch fails */}
            {error && <p>{error}</p>}
            {/* Display prices once data is fetched */}
            {!loading && !error && (
                <div>
                    <p>Bitcoin: ${prices.bitcoin?.usd}</p>
                    <p>Ethereum: ${prices.ethereum?.usd}</p>
                </div>
            )}
        </>
    );
};

export default CryptoPrices;
