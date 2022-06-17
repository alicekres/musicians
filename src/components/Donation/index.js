import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as donationActions from '../../actions/index';

import styles from './index.module.css';

const Donation = () => {
    const sum = useSelector((state) => state.donationReducer.sum);
    const dispatch = useDispatch();

    const handleSmallDonation = () => {
        dispatch({ type: 'SMALL-DONATION', payload: 5 });
    };

    const handleMiddleDonation = () => {
        dispatch({ type: 'MIDDLE-DONATION', payload: 10 });
    };

    const handleBigDonation = () => {
        dispatch({ type: 'BIG-DONATION', payload: 100 });
    };

    return (
        <>
            <div className={styles.donationSection}>
                <p className={styles.p}>
                    Donation for your favourite musician: {sum}
                </p>
                <h2>Donations that have been made up to this point: {sum}</h2>
                <form>
                    <label htmlFor="small-donation"></label>
                    <input
                        type="button"
                        name="small-donation"
                        value="£5"
                        onClick={handleSmallDonation}
                    />
                    <label htmlFor="middle-donation"></label>
                    <input
                        type="button"
                        name="small-donation"
                        value="£10"
                        onClick={handleMiddleDonation}
                    />
                    <label htmlFor="big-donation"></label>
                    <input
                        type="button"
                        name="small-donation"
                        value="£100"
                        onClick={handleBigDonation}
                    />
                </form>
            </div>
        </>
    );
};

export default Donation;
