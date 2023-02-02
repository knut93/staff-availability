import React, { useState } from "react";
import useFile from "../../hooks/use-file";
import { StaffObject } from "../../context/file";

function RemoveStaffForm() {
    const { currentFile, setCurrentFile } = useFile();
    const [deleteName, setDeleteName] = useState("");

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newStaffList = currentFile.staff.filter(staffs => staffs.firstName !== deleteName)
        setCurrentFile((previous: StaffObject) => {
            return {
                ...previous,
                staff: newStaffList
                    
            }
        });
    }

    return (
        <div className="shadow-sm border-2 border-black-600 p-3 rounded text-2x1 max-w-[50%]">
            <form onSubmit={onSubmit} className="table py-3 space-y-3">
                <div className="table-row space-y-3">
                    <label>Enter staff name to remove: </label>
                    <input value={deleteName} onChange={(e) => setDeleteName(e.target.value)} type="block text"className='table-cell border-2 rounded border-gray-600-p-1' />
                </div>
                <button type="submit" className="bg-blue-100">Remove</button>
            </form>
        </div>
    )
};

export default RemoveStaffForm;