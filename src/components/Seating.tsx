import React from 'react'
import { StaffObject } from '../pages/UploadPage'

function Seating(props: StaffObject) {
    console.log("Inside Seating")
    console.log(props)
    const renderedSeating = props.seating.map((seats) => {
        return (
            <div className="flex">
                {
                    seats.map((seat) => {
                        return <div className="border border-indigo-600 h-16 w-16 rounded-xl">{seat?.firstName}</div>
                    })
                }
            </div>

        );
    }); 

    return (
        <div>{renderedSeating}</div>
    )
}

export default Seating