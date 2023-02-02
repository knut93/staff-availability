import React from 'react'
import { StaffObject } from '../context/file';
import useFile from '../hooks/use-file';
function Seating() {
    const { currentFile, setCurrentFile } = useFile();

    console.log("Inside Seating")
    const renderedSeating = currentFile.seating.map((seats) => {
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