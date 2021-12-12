import React from 'react';

const Code4Times = ({code}) => {
    // console.log(code)
    return (
        <div className="mx-2">
            <div className={`${code?.bgColor} flex items-center justify-center px-6 py-2 rounded-full hover:cursor-pointer transition duration-150 ease-in-out`}>
                <h1 className={`${code?.textColor} hover:${code?.textHoverColor} cursor-pointer transition duration-150 ease-in-out`}>{code?.text}</h1>
            </div>
        </div>
    );
};

export default Code4Times;
