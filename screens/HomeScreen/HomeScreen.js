import React from 'react';
import Header from "../../components/HomeScreen_Components/Header";
import FrontStart from "../../components/HomeScreen_Components/FrontStart";
import Comment from "../../components/HomeScreen_Components/Comment";
import HorizontalScrollableList from "../../components/HomeScreen_Components/HorizontalScrollableList/HorizontalScrollableList";

const HomeScreen = () => {
    return (
        <div className="text-white">
            <Header />
            <FrontStart />
            <Comment />
            <HorizontalScrollableList />
        </div>
    );
};

export default HomeScreen;
