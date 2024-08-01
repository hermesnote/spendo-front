import React, { useEffect, useState } from "react";

function DataFetcher() {

    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/data`;

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{

        console.log('Fetching data from API...');
        fetch(apiUrl)
        .then(response => {
            console.log('Receive response:', response);
            if( !response.ok ){
                throw new Error('Network response was not ok' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.error('Receive data:', data);
            setData(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            setError(error);
        });
    }, [apiUrl]);

    if(error){
        return <div>錯誤:{error.message}</div>;
    }

    return (
        <div>
            {data ? <p>數據：{JSON.stringify(data)}</p> : <p>載入中...</p>}
        </div>
    );

}

export default DataFetcher;