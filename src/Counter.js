import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const addBtnClick = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };
    const removeBtnClick = () => {
        if (counter <= 0) {
            return;
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }
    };

    return (
        <div>
            <div role="figure">Count: {counter}</div>
            <button className="button button-success" onClick={addBtnClick}>
                add one
            </button>
            <button
                className="button button-success"
                onClick={() => removeBtnClick()}
            >
                remove one
            </button>
        </div>
    );
};

export default Counter;
