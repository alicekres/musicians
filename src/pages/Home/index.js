import React from 'react';

import Donation from '../../components/Donation';
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
            <Donation />
            <Artist
                sandraComponent={<SandraDonation />}
                helleviComponent={<HelleviDonation />}
                daynaComponent={<DaynaDonation />}
            />
        </>
    );
};

export default Home;
