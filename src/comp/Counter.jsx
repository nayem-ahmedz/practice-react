import { useState } from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);
    function incCount(){
        const newCount = count + 1;
        setCount(newCount);
    }
    const decCount = () => setCount(prev => prev -1);
    // const decCount = () => {
    //     if(count <= 0){
    //         alert('count is now zero'); // disabling is better than this
    //     } else{
    //         setCount(prev => prev - 1);
    //     }
    // }
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={incCount}>Increment</button>
            <button onClick={decCount} disabled={count === 0}>Decrement</button>
        </div>
    )
}