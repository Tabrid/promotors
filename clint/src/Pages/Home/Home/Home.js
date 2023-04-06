import React from 'react';
import Service from '../../Service/Service';
import Banner from '../Banner/Banner';
import Servent from '../Servent/Servent';
import Stat from '../Stat/Stat';

const Home = () => {
    return (
        <div className='bg-gray-900'>
            <Banner></Banner>
            <Service></Service>
            <Servent></Servent>
            <Stat></Stat>
        </div>
    );
};

export default Home;