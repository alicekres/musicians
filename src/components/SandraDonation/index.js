import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styles from './index.module.css';

const SandraDonation = () => {
    const sum = useSelector((state) => state.sandraDonationReducer.sum);

    const dispatch = useDispatch();

    const handleSmallDonation = () => {
        dispatch({ type: 'SMALL-SANDRA-DONATION', payload: 5 });
    };

    const handleMiddleDonation = () => {
        dispatch({ type: 'MIDDLE-SANDRA-DONATION', payload: 10 });
    };

    const handleBigDonation = () => {
        dispatch({ type: 'BIG-SANDRA-DONATION', payload: 100 });
    };

    return (
        <>
            <div className={styles.donationSection}>
                <p className={styles.p}>
                    Yuo have the opportunity to support your favourite musician
                    who are at the moment singing out of joy and working in
                    other areas rather than in music industry.
                </p>
                <p>
                    Donations that have been made to Sandra up to this point:{' '}
                    {sum}
                </p>
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

export default SandraDonation;
