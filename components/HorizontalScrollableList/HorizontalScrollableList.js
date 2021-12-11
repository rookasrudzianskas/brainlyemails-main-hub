import React from 'react';
import TwitterCard from "../TwitterCard/TwitterCard";

const HorizontalScrollableList = () => {
    return (
        <div className="mt-16">
        {/*    create horizontal scrollable list */}
            <div
                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
            >
                <div
                    className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                >

                    <div className="inline-block px-3">
                        <TwitterCard />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HorizontalScrollableList;
