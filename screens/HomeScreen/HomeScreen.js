import React from 'react';
import Header from "../../components/Header";
import FrontStart from "../../components/FrontStart";
import Comment from "../../components/Comment";
import HorizontalScrollableList from "../../components/HorizontalScrollableList/HorizontalScrollableList";

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
