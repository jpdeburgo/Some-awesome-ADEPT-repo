import React from 'react'
import { useState } from 'react';
import dog from '../public/dog.jpeg'

export const Counter = (props: { initialCount: number }) => {
    const [count, setCount] = useState(Number(0));
    return (
        <div>
            <h2>Counter</h2>
            <p>You have clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click Me</button>
        </div>
    )
}

