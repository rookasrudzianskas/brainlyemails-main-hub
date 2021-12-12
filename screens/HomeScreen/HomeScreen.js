import React from 'react';
import Header from "../../components/HomeScreen_Components/Header";
import FrontStart from "../../components/HomeScreen_Components/FrontStart";
import Comment from "../../components/HomeScreen_Components/Comment";
import HorizontalScrollableList from "../../components/HomeScreen_Components/HorizontalScrollableList/HorizontalScrollableList";
import LoadingExplanationText from "../../components/HomeScreen_Components/LoadingExplanationText";

const HomeScreen = () => {
    return (
        <div className="text-white">
            <Header />
            <FrontStart />
            <Comment />
            <HorizontalScrollableList />
            <LoadingExplanationText />
        </div>
    );
};

export default HomeScreen;
