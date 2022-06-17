import React from 'react';
import { Artist, Greeting, Donation } from '../../components';

const Home = () => {
    return (
        <>
            <Greeting />
            <Artist component={<Donation />} />
        </>
    );
};

export default Home;
