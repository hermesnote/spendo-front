// src/components/Counter.js
import React, { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // 有依賴的陣列 => 只有當依賴變化時才會執行 useEffect 中的副作用函數。
    useEffect( () => {
        console.log(`Count changed to ${count}`);
    }, [count] )

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