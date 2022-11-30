import React from 'react'

const CardCar = ({ item }) => {
    return (
        <div className='w-80 bg-white m-3 shadow-sm hover:shadow-md px-5 py-4 rounded cursor-pointer'>
            <div className=''>
                <div className='flex items-center relative'>
                    <p className='text-[#a7a7a7] text-[12px]'>{item.date}</p>
                    <div className='absolute right-0 bg-[#efa7a7] flex justify-center  w-8 h-5 items-center rounded'>
                        <img src='/images/star.png' className='w-4 h-4' alt='star' />
                    </div>
                </div>
                <p className='font-bold text-[#555]'>{item.car_name}</p>
            </div>
            <img src={item.carImg} alt='car' className='rounded shadow-xl my-2  w-full h-40' />
            <div className='flex text-[#555] justify-between text-[13px]'>
                <p className=''>Mileage <span className='font-semibold text-[15px]'>{item.mileage} km</span></p>
                <p className=''>Location <span className='font-semibold text-[15px]'>{item.location}</span></p>
            </div>
            <div className='flex text-[#555] justify-between text-[13px]'>
                <p>Engine <span className='font-semibold text-[15px]'>3.5 diesel</span></p>
                <p>Transmission <span className='font-semibold text-[15px]'>Machine</span></p>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <h1 className='font-bold text-[#555] text-[20px]'>
                    {item.price} Rs
                </h1>
                <button className='bg-[#ff4949] text-white font-semibold rounded w-32 h-10 hover:shadow-xl shadow-2xl'>More Details</button>
            </div>
        </div>
    )
}

export default CardCar