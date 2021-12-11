import React from 'react';
import Header from "../../components/Header";
import FrontStart from "../../components/FrontStart";

const HomeScreen = () => {
    return (
        <div className="text-white">
            <Header />
            <FrontStart />
            <Comment />
        </div>
    );
};

export default HomeScreen;
