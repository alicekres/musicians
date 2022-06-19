import React from 'react';
import {
    Artist,
    Greeting,
    SandraDonation,
    HelleviDonation,
    DaynaDonation,
} from '../../components';

const Home = () => {
    return (
        <>
            <Greeting />
            <Artist
                sandraComponent={<SandraDonation />}
                helleviComponent={<HelleviDonation />}
                daynaComponent={<DaynaDonation />}
            />
        </>
    );
};

export default Home;
