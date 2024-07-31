// src/TestCORS.js
import React, { useEffect } from 'react';

const TestCORS = () => {
    useEffect(() => {
        fetch('http://localhost:8080/api/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('There was a problem with your fetch operation:', error));
    }, []);

    return (
        <div>
            <h1>Testing CORS</h1>
        </div>
    );
};

export default TestCORS;
