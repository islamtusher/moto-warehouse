import React from 'react';
import './Home.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';
import Loading from '../loading/Loading';
import Banner from '../homeComponents/banner/Banner';
import Category from '../homeComponents/category/Category';
import Collections from '../homeComponents/collections/Collections';
import Footer from '../homeComponents/footer/Footer';
import Services from '../homeComponents/services/Services';

const Home = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
      return  <div style={{ 'height': '700px'}} className='d-flex justify-content-center align-items-center'><Loading></Loading></div>
    } 
    return (
        <div id='home'>
            <Banner></Banner>
            <Collections></Collections>
            <Category></Category>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;