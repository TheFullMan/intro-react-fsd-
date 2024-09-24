import React, { useState } from 'react';


const Button = () => {

    const [count, setCount] = useState(0)

    const incrementByFive = () => {
        setCount(count + 5)
    }

    const decrementByFive = () => {
        setCount(count - 5);
    };

    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={incrementByFive}>Increment by 5</button>
            <button onClick={decrementByFive}>Decrement by 5</button>
        </>
    )
}

export default Button 