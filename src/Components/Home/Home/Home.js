import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Bannar from '../Bannar/Bannar';
import Reviews from '../../Review/Reviews'

import SliceToys from '../SliceToy/SliceToys';
import Subscrive from '../Subscrive/Subscrive';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <SliceToys></SliceToys>
            <Reviews></Reviews>
            <Subscrive></Subscrive>
            <Footer></Footer>
            
            
            
            
            
        </div>
    );
};

export default Home;