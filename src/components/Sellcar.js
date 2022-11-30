import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Leftcomp from "./Leftcomp";
import axios from 'axios';

const Sellcar = () => {
    const navigate = useNavigate();
    const [car, setCar] = useState({
        date: new Date().toLocaleDateString(),
        car_name: "",
        carImg: "",
        mileage: "",
        location: "",
        engine: "",
        transmission: "",
        price: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
    };
    const sell = (e) => {
        e.preventDefault();
        if (car.car_name === "" || car.carImg === "" ||
            car.mileage === "" ||
            car.location === "" ||
            car.engine === "" ||
            car.transmission === "" ||
            car.price === "") {
            alert("Pls fill all the details")
            return;
        }
        axios.post("https://carbackend52.onrender.com/car/sell", car)
        alert("Successfully Added");
        navigate("/")
    };
    return (
        <div className="flex">
            <Leftcomp />
            <div className="divide-y divide-[#ff4949] w-[70%] flex-row justify-center relative">
                <h4 className="font-bold text-[28px] text-[#ff4949] my-5 flex justify-center">
                    SELL YOUR CAR
                </h4>
                <form onSubmit={sell}>
                    <div className="flex flex-col my-5">
                        <label htmlFor="Name" className="font-semibold text-[#555] my-2">
                            Your Car Name
                        </label>

                        <input
                            type="text"
                            className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="car_name"
                            placeholder="Ford Explorer (2018)"
                            value={car.car_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col my-5">
                        <label
                            className="font-semibold text-[#555] mb-2"
                        >
                            Your Car image Link
                        </label>
                        <input
                            type="text"
                            className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="carImg"
                            value={car.carImg}
                            placeholder="www.mycarimage.com"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col my-5">
                        <label
                            className="font-semibold text-[#555] mb-2"
                        >
                            Your Car mileage
                        </label>
                        <input
                            type="text"
                            className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="mileage"
                            placeholder="30"
                            value={car.mileage}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col my-5">
                        <label
                            className="font-semibold text-[#555] mb-2"
                        >
                            Your Location
                        </label>
                        <input
                            type="text"
                            className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="location"
                            value={car.location}
                            placeholder="Kolkata"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col my-5">
                        <label
                            className="font-semibold text-[#555] mb-2"
                        >
                            Car Engine Details
                        </label>
                        <input
                            type="text"
                            className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="engine"
                            value={car.engine}
                            placeholder="3.5 diesel"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col my-5">
                        <label
                            className="font-semibold text-[#555] mb-2"
                        >
                            Transmission
                        </label>
                        <input
                            type="text"
                            className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Machine"
                            name="transmission"
                            value={car.transmission}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col my-5">
                        <label
                            className="font-semibold text-[#555] mb-2"
                        >
                            Selling Price Rs
                        </label>
                        <input
                            type="text"
                            className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="price"
                            placeholder="17900"
                            value={car.price}
                            onChange={handleChange}
                        />
                    </div>


                    <button onClick={sell} className="bg-[#ff4949] mb-10 w-32 h-10 rounded text-white font-bold">
                        Sell Your Car
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Sellcar;
