import React from 'react';

const LoadingExplanationText = () => {
    return (
        <div className="p-10 flex items-center justify-center mt-28">
            <div className=" max-w-4xl p-10">
                <span className="cursor-pointer  text-7xl font-bold">
                    While you were
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-red-400 cursor-pointer mx-2">waiting</span> for your static email to build,
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-400 cursor-pointer mx-2">distributed email</span> infra­structure got really good.
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-purple-400 cursor-pointer mx-2">Break through the static.</span>
                </span>

                <div>

                            <span className="text-xl font-normal text-gray-300">
                                  <div className="mt-3">
                                            Brainlyemails is a seamless server and browser runtime
                                    that provides snappy page loads and instant transitions by
                                    leveraging distributed systems and native browser features instead
                                    of clunky static builds. Built on the Web Fetch API (instead of Node) it can run anywhere.
                                    It already runs natively on Cloudflare Workers, and of course supports serverless and traditional
                                    Node.js environments, so you can come as you are.
                                  </div>

                                    <div className="mt-5">
                                        <span className="mt-5">
                                            Email speed is only one aspect of our true goal though. We're after better user experiences.
                                        As you’ve pushed the boundaries of the web, your tools haven’t caught up to your appetite.
                                        Brainlyemails is ready to serve you from the initial request to the fanciest UX your designers can think up.
                                        Check it out 👀
                                        </span>
                                    </div>
                                </span>
                </div>
            </div>
        </div>
    );
};

export default LoadingExplanationText;
