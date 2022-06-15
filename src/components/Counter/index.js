import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                Like
            </button>
            <button
                className="button button-success"
                onClick={() => removeBtnClick()}
            >
                Dislike
            </button>
        </div>
    );
};

export default Counter;
