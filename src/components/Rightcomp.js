import React from 'react'
import CardCar from './CardCar'

const Rightcomp = ({ car, search }) => {
    console.log(search)
    return (
        <div className='grid grid-cols-3'>
            {
                search !== null ? search.map(item => (<CardCar item={item} />)) :
                    car.map((item) => (<CardCar item={item} />))
            }
        </div>
    )
}

export default Rightcomp