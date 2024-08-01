// src/TestCORS.js
import React, { useEffect } from 'react';

const TestCORS = () => {

    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/data`;

    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('There was a problem with your fetch operation:', error));
    }, [apiUrl]);

    return (
        <div>
            <h1>Testing CORS</h1>
        </div>
    );
};

export default TestCORS;
