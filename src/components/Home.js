import React from 'react'
import Leftcomp from './Leftcomp'
import Rightcomp from './Rightcomp'

const Home = ({ car, search }) => {
    return (
        <div className="flex">
            <Leftcomp />
            <Rightcomp car={car} search={search} />
        </div>
    )
}

export default Home