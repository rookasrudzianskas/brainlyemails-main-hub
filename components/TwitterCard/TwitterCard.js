import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';


const TwitterCard = () => {
    return (
        <div className="max-w-xl">
        {/*    make twitter card */}
            <div className="">
                <div className="flex flex-1 items-center">
                    <div className="flex flex-row items-center">
                        <img src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg" className="w-10 h-10 mr-4 rounded-full" alt=""/>
                        <div>
                            <h1 className="font-bold">@rookas</h1>
                            <p>byRookas</p>
                        </div>
                    </div>
                    <div  className="bg-white inline-block h-6 w-6 rounded-full ring-2 ring-white flex items-center justify-center ml-16">
                        <TwitterIcon className="text-black text-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwitterCard;
