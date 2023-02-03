import React, { useEffect, useState } from 'react'
import useFile from '../../hooks/use-file'
import { StaffObject } from '../../context/file';
import { Staff } from './StaffList';

interface AvailabilityInterface {
    mon?: string,
    tue?: string,
    wed?: string,
    thu?: string,
    fri?: string,
    sat?: string,
    sun?: string
}
function EditForm(props: { currentEditStaff: Staff, setCurrentEditStaff: Function }) {
    const { currentEditStaff, setCurrentEditStaff } = props;
    const { currentFile, setCurrentFile } = useFile();
    const [newAvail, setNewAvail] = useState<AvailabilityInterface>({
        mon: "",
        tue: "",
        wed: "",
        thu: "",
        fri: "",
        sat: "",
        sun: ""
    });

    useEffect(() => {
        if (currentEditStaff.mon) {
            setNewAvail(prevState => ({ ...prevState, mon: currentEditStaff.mon }))
        }
        if (currentEditStaff.tue) {
            setNewAvail(prevState => ({ ...prevState, tue: currentEditStaff.tue }))
        }
        if (currentEditStaff.wed) {
            setNewAvail(prevState => ({ ...prevState, wed: currentEditStaff.wed }))
        }
        if (currentEditStaff.thu) {
            setNewAvail(prevState => ({ ...prevState, thu: currentEditStaff.thu }))
        }
        if (currentEditStaff.fri) {
            setNewAvail(prevState => ({ ...prevState, fri: currentEditStaff.fri }))
        }
        if (currentEditStaff.sat) {
            setNewAvail(prevState => ({ ...prevState, sat: currentEditStaff.sat }))
        }
        if (currentEditStaff.sun) {
            setNewAvail(prevState => ({ ...prevState, sun: currentEditStaff.sun }))
        }
    }, [currentFile]);

    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let editedUser = {
            ...newAvail,
            firstName: currentEditStaff.firstName
        }
        let tempStaff = currentFile.staff.filter(a => a.firstName !== currentEditStaff.firstName);
        tempStaff.push(editedUser)
        setCurrentFile((previous: StaffObject) => {
            return {
                ...previous,
                staff: tempStaff
                    
            }
        });
    }

    

    return (
        <div className="shadow-sm border-2 border-black-600 p-3 rounded text-2x1 max-w-[50%]">
            <form onSubmit={onSubmit} className="table space-y-3">
                <div>
                    Availability:
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Mon: </label>
                    <input value={newAvail.mon} onChange={e => setNewAvail(prevState => ({ ...prevState, mon: e.target.value }))} id="mon" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Tue: </label>
                    <input value={newAvail.tue} onChange={e => setNewAvail(prevState => ({ ...prevState, tue: e.target.value }))} id="tue" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Wed: </label>
                    <input value={newAvail.wed} onChange={e => setNewAvail(prevState => ({ ...prevState, wed: e.target.value }))} id="wed" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Thu: </label>
                    <input value={newAvail.thu} onChange={e => setNewAvail(prevState => ({ ...prevState, thu: e.target.value }))} id="thu" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Fri: </label>
                    <input value={newAvail.fri} onChange={e => setNewAvail(prevState => ({ ...prevState, fri: e.target.value }))} id="fri" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Sat: </label>
                    <input value={newAvail.sat} onChange={e => setNewAvail(prevState => ({ ...prevState, sat: e.target.value }))} id="sat" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Sun: </label>
                    <input value={newAvail.sun} onChange={e => setNewAvail(prevState => ({ ...prevState, sun: e.target.value }))} id="sun" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
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
                editForm && <EditForm currentEditStaff={currentEditStaff} setCurrentEditStaff={setCurrentEditStaff}/>
            }
        </div>
    )
}

export default EditStaffForm