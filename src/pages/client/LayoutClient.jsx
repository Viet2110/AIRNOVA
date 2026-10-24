import React from 'react';
import Navbar from '../../components/common/client/Navbar';
import Home from './home/Home';
import Footer from '../../components/common/client/Footer';
import Header from '../../components/common/client/Header';
import ClientRouters from '../../routers/ClientRouters';

function LayoutClient(props) {
    return (
        <div className='flex'>
            <Navbar />
            <div className="right flex-1 lg:h-screen overflow-auto">
                {/* <Header /> */}
                <ClientRouters />
                <Footer/>
            </div>
        </div>
    );
}

export default LayoutClient;