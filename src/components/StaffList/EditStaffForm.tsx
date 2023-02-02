import React, { useEffect, useState } from 'react'
import useFile from '../../hooks/use-file'
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
    const [monAvail, setMonAvail] = useState<string | undefined>();
    const [tueAvail, setTueAvail] = useState<string | undefined>();
    const [wedAvail, setWedAvail] = useState<string | undefined>();
    const [thuAvail, setThuAvail] = useState<string | undefined>();
    const [friAvail, setFriAvail] = useState<string | undefined>();
    const [satAvail, setSatAvail] = useState<string | undefined>();
    const [sunAvail, setSunAvail] = useState<string | undefined>();

    useEffect(() => {
        setMonAvail(currentEditStaff.mon);
        setTueAvail(currentEditStaff.tue);
        setWedAvail(currentEditStaff.wed);
        setThuAvail(currentEditStaff.thu);
        setFriAvail(currentEditStaff.fri);
        setSatAvail(currentEditStaff.sat);
        setSunAvail(currentEditStaff.sun);
    }, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="shadow-sm border-2 border-black-600 p-3 rounded text-2x1 max-w-[50%]">
            <form onSubmit={onSubmit} className="table space-y-3">
                <div>
                    Availability:
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Mon: </label>
                    <input value={monAvail} onChange={e => setMonAvail(e.target.value)} id="mon" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Tue: </label>
                    <input value={tueAvail} onChange={e => setTueAvail(e.target.value)} id="tue" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Wed: </label>
                    <input value={wedAvail} onChange={e => setWedAvail(e.target.value)} id="wed" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Thu: </label>
                    <input value={thuAvail} onChange={e => setThuAvail(e.target.value)} id="thu" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Fri: </label>
                    <input value={friAvail} onChange={e => setFriAvail(e.target.value)} id="fri" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Sat: </label>
                    <input value={satAvail} onChange={e => setSatAvail(e.target.value)} id="sat" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <div className="table-row space-y-3">
                    <label className="table-cell">Sun: </label>
                    <input value={sunAvail} onChange={e => setSunAvail(e.target.value)} id="sun" type="block text" className='table-cell border-2 rounded border-gray-600-p-1' />
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