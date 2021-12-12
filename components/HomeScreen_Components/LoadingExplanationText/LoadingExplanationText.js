import React from 'react';

const LoadingExplanationText = () => {
    return (
        <div className="p-10 flex items-center justify-center mt-28">
            <div className=" max-w-4xl p-10 text-7xl font-bold">
                <span>
                    While you were
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-red-400 cursor-pointer mx-2">waiting</span> for your static email to build,
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-400 cursor-pointer mx-2">distributed email</span> infra­structure got really good.
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-purple-400 cursor-pointer mx-2">Break through the static.</span>
                </span>
            </div>
        </div>
    );
};

export default LoadingExplanationText;
