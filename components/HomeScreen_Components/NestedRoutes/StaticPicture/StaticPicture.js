import React, {useEffect, useState} from 'react';

const StaticPicture = () => {

    // const [show, handleShow] = useState(false);
    //
    //
    // const transitionNavBar = () => {
    //     // console.log('This is window 🔥', window.scrollY);
    //     if(window.scrollY > 400) {
    //         handleShow(true);
    //     } else {
    //         handleShow(false);
    //     }
    // }
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', transitionNavBar);
    //
    //     return () => window.removeEventListener("scroll", transitionNavBar);
    // }, []);



    // show the scroll y position
    // console.log('This is window 🔥', window.scrollY);

    return (
        <div className="flex justify-center overflow-y-hide">
            <div className="absolute">
                <img className="fixed bottom-0 left-[28rem]" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
            </div>

            {/*<div className="App">*/}
            {/*    {Array(200)*/}
            {/*        .fill()*/}
            {/*        .map((_, i) => (*/}
            {/*            <p key={i}>lorem ipsum {scrollPosition}</p>*/}
            {/*        ))}*/}
            {/*</div>*/}
        </div>
    );
};

export default StaticPicture;
