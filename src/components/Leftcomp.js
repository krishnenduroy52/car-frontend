import React from "react";

const Leftcomp = () => {
    return (
        <div className="w-[20%] bg-[#efa7a7] h-64 sticky top-8 my-3 mx-2 rounded">
            <div className="bg-white m-2 h-10 flex items-center px-2 rounded text-[#555] font-semibold justify-between">
                <p>Car Basic Information</p>
                <img src="/images/plus.png" className="w-5" alt="plus" />
            </div>
            <div className="bg-white m-2 h-10 flex items-center px-2 rounded text-[#555] font-semibold justify-between">
                <p>Car cost</p>
                <img src="/images/plus.png" className="w-5" alt="plus" />
            </div>
            <div className="bg-white m-2 h-10 flex items-center px-2 rounded text-[#555] font-semibold justify-between">
                <p>Search region</p>
                <img src="/images/plus.png" className="w-5" alt="plus" />
            </div>
            <div className="bg-white m-2 h-10 flex items-center px-2 rounded text-[#555] font-semibold justify-between">
                <p>Vehicle condition</p>
                <img src="/images/plus.png" className="w-5" alt="plus" />
            </div>
            <div className="bg-white m-2 h-10 flex items-center px-2 rounded text-[#555] font-semibold justify-between">
                <p>Color</p>
                <img src="/images/plus.png" className="w-5" alt="plus" />
            </div>
        </div>
    );
};

export default Leftcomp;
