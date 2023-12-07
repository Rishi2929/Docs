import React from 'react'
import Card from './Card'

function Foreground() {
    return (
        <div>
            <div className='fixed top-0 left-0 z-[2] w-full h-full '>
                <Card></Card>
            </div>
        </div>
    )
}

export default Foreground