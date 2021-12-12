import React from 'react';

const Code4Times = ({code}) => {
    console.log(code)
    return (
        <div className="">
            <div className={`${code?.bgColor} flex items-center justify-center px-6 py-2 rounded-full hover:bg-blue-700  cursor-pointer transition duration-150 ease-in-out`}>
                <h1 className={`text-blue-500 hover:text-blue-400 cursor-pointer transition duration-150 ease-in-out`}>{code?.text}</h1>
            </div>
        </div>
    );
};

export default Code4Times;
