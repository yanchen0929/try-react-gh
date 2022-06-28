import React from 'react';
import SetMeal from './SetMeal';
import Vip from './Vip'
import OrderList from './OrderList'

const Home = () => {
    return (
        <div>
            <SetMeal/>
            <Vip/>
            <OrderList/>
        </div>
    );
};

export default Home;