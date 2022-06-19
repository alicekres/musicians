import React from 'react';
import { useSelector } from 'react-redux';

const Donation = () => {
    const helleviSum = useSelector(
        (state) => state.helleviDonationReducer.helleviSum
    );
    const sandraSum = useSelector((state) => state.sandraDonationReducer.sum);
    const daynaSum = useSelector((state) => state.daynaDonationReducer.sum);
    return (
        <>
            <p>
                Thank you everyone for your support towards our lovely
                musicians! Up to this point you have supported them with the
                following amount:
            </p>
            <div>Sandra Entermann: {sandraSum}£</div>
            <div>Dayna Petrie: {daynaSum}£</div>
            <div>Hellevi Nõmmik: {helleviSum}£</div>
        </>
    );
};

export default Donation;
