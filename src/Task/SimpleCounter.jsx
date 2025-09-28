import { useState } from 'react';

export default function SimpleCounter(){
    const [count, setCount] = useState(0);
    function increment(){
        const newCount = count + 1;
        setCount(newCount);
    }
    const reset = () => setCount(0);
    const decrement = () => setCount(prev => prev - 1);
    const style = {
        display: 'flex', gap: '15px' 
    }
    return(
        <div>
            <h2>Count : {count} </h2>
            <div style={style}>
                <button onClick={increment}>+</button>
                <button onClick={reset}>reset</button>
                <button onClick={decrement} disabled={count === 0}>-</button>
            </div>
        </div>
    );
}