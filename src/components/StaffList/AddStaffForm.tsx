import React, { ChangeEvent, useState } from 'react'
import Staff from './StaffList'
import useFile from '../../hooks/use-file'
import { StaffObject } from '../../context/file'

interface Staff {
    firstName: string,
    mon?: string,
    tue?: string,
    wed?: string,
    thu?: string,
    fri?: string,
    sat?: string,
    sun?: string
}

function AddStaffForm() {
    const [newUser, setNewUser] = useState<Staff>({ firstName: "" })
    const { currentFile, setCurrentFile } = useFile();

    const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value: typeof newUser[keyof typeof newUser] = event.target.value
        setNewUser({ ...newUser, [event.target.id]: value });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(newUser);
        setCurrentFile((previous: StaffObject) => {
            return {
                ...previous,
                staff: [
                    ...previous.staff,
                    newUser
                ]
                    
            }
        });
        setNewUser({ 
            firstName: "", 
            mon: "",
            tue: "",
            wed: "",
            thu: "",
            fri: "",
            sat: "",
            sun: "",
        }) 
    }

    return (
        <div className="shadow-sm border-2 border-black-600 p-3 rounded text-2x1 max-w-[50%]">
            <form onSubmit={onSubmit} className="table space-y-3">
                <div className="table-row space-y-6">
                    <label className="table-cell">Staff Name: </label>
                    <input value={newUser.firstName} onChange={onFieldChange} id="firstName" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div>
                    Availability:
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Mon: </label>
                    <input value={newUser.mon} onChange={onFieldChange} id="mon" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Tue: </label>
                    <input value={newUser.tue} onChange={onFieldChange} id="tue" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Wed: </label>
                    <input value={newUser.wed} onChange={onFieldChange} id="wed" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Thu: </label>
                    <input value={newUser.thu} onChange={onFieldChange} id="thu" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Fri: </label>
                    <input value={newUser.fri} onChange={onFieldChange} id="fri" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Sat: </label>
                    <input value={newUser.sat} onChange={onFieldChange} id="sun" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Sun: </label>
                    <input value={newUser.sun} onChange={onFieldChange} id="sun" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <button type="submit" className="bg-blue-100">Confirm</button>
            </form>
        </div>
    )
}

export default AddStaffForm