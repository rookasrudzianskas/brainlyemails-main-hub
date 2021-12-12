import React from 'react';

const StaticPicture = () => {
    return (
        <div className="flex justify-center overflow-y-hide">
            <div className="relative">
                <img className="fixed bottom-0 left-[28rem]" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
            </div>
        </div>
    );
};

export default StaticPicture;
