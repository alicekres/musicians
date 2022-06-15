import React from 'react';

import styles from './index.module.css';

const Contact = () => {
    return (
        <>
            <form>
                <div className={styles.general}>
                    <h3>Contact me</h3>
                    <div className="firstGroup">
                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                        />
                        <label htmlFor="email"></label>
                        <input type="email" name="email" placeholder="email" />
                    </div>
                    <div className="secondGroup">
                        <label htmlFor="message">Your message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Contact;
