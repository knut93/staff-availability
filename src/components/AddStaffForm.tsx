import React, { useState } from 'react'

interface AddStaffObject {
    firstName: string
}
function AddStaffForm() {
    const [newUser, setNewUser] = useState<AddStaffObject>({ firstName: ""})

    return (
        <div className="shadow-sm border-2 border-black-600 p-3 rounded text-2x1 max-w-[50%]">
            <form onSubmit={(e) => {}} className="table space-y-3">
                <div className="table-row space-y-6">
                    <label className="table-cell">Staff Name: </label>
                    <input type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div>
                    Availability:
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Mon: </label>
                    <input type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Tue: </label>
                    <input type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Wed: </label>
                    <input type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Thu: </label>
                    <input type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Fri: </label>
                    <input type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Sat: </label>
                    <input type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Sun: </label>
                    <input type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <button type="submit" className="">Confirm</button>
            </form>
        </div>
    )
}

export default AddStaffForm