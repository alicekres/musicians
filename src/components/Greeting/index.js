import React, { useState } from 'react';

import styles from './index.module.css';

const Greeting = () => {
    const [nameInput, setNameInput] = useState('');
    const [name, setName] = useState('');

    const handleInput = (e) => {
        setNameInput(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setName(nameInput);
        setNameInput('');
    };

    return (
        <>
            <div className={styles.greetingCard}>
                <h3 aria-label="greeting">
                    {name
                        ? `Welcome ${name}! Enjoy the music from the wonderful, talented musicians!`
                        : 'Welcome! Enjoy the music from the wonderful, talented musicians!'}
                </h3>

                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        placeholder="Please enter your name"
                        id="name"
                        value={nameInput}
                        onChange={handleInput}
                    />
                </form>
            </div>
        </>
    );
};

export default Greeting;
