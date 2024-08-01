// src/components/Counter.js
import React, { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // 空的依賴陣列 => 只在組件第一次掛載時執行 useEffect 中的副作用函數。
    useEffect( () => {
        console.log('Component re-rendered');
    }, [])

    return (
        <div>
            <p>你點擊了 {count} 次</p>
            <button onClick={() => setCount(count + 1)}>
                點我增加
            </button>
        </div>
    );

};

export default Counter;