import React from "react";
import CardCar from "./CardCar";

const Rightcomp = ({ car, search }) => {
    return (
        <div className="grid grid-cols-3 items-center">
            {car.length == 0 ? (
                <div className="bg-[#efa7a7] rounded mx-10 flex-row items-center justify-center p-5">
                    <p>
                        Loading...

                    </p>
                    <p>It may take 30 sec to load</p>
                    <img
                        src="/images/Spinner.gif"
                        className="w-10"
                    />
                </div>
            ) : search !== null ? (
                search.map((item) => <CardCar item={item} />)
            ) : (
                car.map((item) => <CardCar item={item} />)
            )}
        </div>
    );
};

export default Rightcomp;
