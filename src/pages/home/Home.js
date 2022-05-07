import React from 'react';
import './Home.css'
import Banner from './homeComponents/banner/Banner';
import Category from './homeComponents/category/Category';
import Collections from './homeComponents/collections/Collections';
import Footer from './homeComponents/footer/Footer';
import Services from './homeComponents/services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collections></Collections>
            <Category></Category>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;