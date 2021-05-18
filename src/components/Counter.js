import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const increment = () => dispatch({type: 'INC'});
    const decrement = () => dispatch({type: 'DEC'});
    const plus100 = () => dispatch({type: 'CUSTOM', payload: 100});
    const minus100 = () => dispatch({type: 'CUSTOM', payload: -100});

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={plus100}>+100</button>
                <button onClick={minus100}>-100</button>
            </div>
        </div>
    );
};

export default Counter;