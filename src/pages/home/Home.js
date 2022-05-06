import React from 'react';
import Banner from './homeComponents/banner/Banner';
import Collections from './homeComponents/collections/Collections';
import Footer from './homeComponents/footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collections></Collections>
            <Footer></Footer>
        </div>
    );
};

export default Home;