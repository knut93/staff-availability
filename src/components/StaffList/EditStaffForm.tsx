import React, { useState } from 'react'
import useFile from '../../hooks/use-file'
import { Staff } from './StaffList';

function EditForm( currentEditStaff: Staff) {
    console.log("Inside EditForm")
    console.log(currentEditStaff)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    }

    return (
        <div className="shadow-sm border-2 border-black-600 p-3 rounded text-2x1 max-w-[50%]">
            <form onSubmit={onSubmit} className="table space-y-3">
                <div>
                    Availability:
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Mon: </label>
                    <input value={currentEditStaff.mon} id="mon" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Tue: </label>
                    <input value={currentEditStaff.tue} id="tue" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Wed: </label>
                    <input id="wed" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Thu: </label>
                    <input id="thu" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Fri: </label>
                    <input id="fri" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Sat: </label>
                    <input id="sun" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Sun: </label>
                    <input id="sun" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <button type="submit" className="bg-blue-100">Confirm</button>
            </form>
        </div>
    )
}
function EditStaffForm() {
    const { currentFile, setCurrentFile } = useFile();
    const [editForm, setEditForm] = useState(false);
    const [currentEditStaff, setCurrentEditStaff] = useState<Staff>({ firstName: "" });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setEditForm(!editForm);
        console.log(e.currentTarget.value)
        setCurrentEditStaff(currentFile.staff.filter(staffs => staffs.firstName === e.currentTarget.value)[0])
    };
    const renderedStaff = currentFile.staff.map((staffs) => {
        return (
            <button value={staffs.firstName} onClick={handleClick} className="cursor-pointer block p-1 bg-transparent">
                {staffs.firstName}
            </button>
        )
    });

    return (
        <div className="flex space-y-2">
            <div className="pr-3">
            {renderedStaff}

            </div>
            {
                editForm && < EditForm {...currentEditStaff}/>
            }
        </div>
    )
}

export default EditStaffForm