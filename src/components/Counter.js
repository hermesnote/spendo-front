// src/components/Counter.js
import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

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