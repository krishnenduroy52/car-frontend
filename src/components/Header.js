import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    const [search, setSearch] = useState("")
    const handelSearch = (e) => {
        const value = e.target.value;
        // setSearch({ ...search, value })
        props.handelse(value);
    }
    return (
        <div className="flex items-center border-b-2">
            <Link to='/' className="w-[22%] flex py-5 px-6 border-r-2">
                <img src="/images/pngegg.png" className="w-10" alt="logo" />
                <h3 className="font-bold ml-1 text-[#555]">AUTO WORLD</h3>
            </Link>
            <div className="flex py-2 px-6 w-[57%] relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ml-6">
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                    onChange={handelSearch}
                />
            </div>
            <div className="flex absolute right-0 w-[20%]">
                <Link
                    to="/sell"
                    className="bg-[#ff0000] py-2.5 px-8 rounded font-semibold text-white"
                >
                    Sell a car
                </Link>

                <img
                    src="/images/menu.png"
                    className="w-10 absolute right-0 mr-10"
                    alt="menu"
                />
            </div>
        </div>
    );
};

export default Header;
