import React, { useState } from 'react'
import { StaffObject } from '../../context/file';
import useFile from '../../hooks/use-file';
import AddStaffForm from './AddStaffForm';
import EditStaffForm from './EditStaffForm'
import RemoveStaffForm from './RemoveStaffForm';
import SortableTable from '../SortableTable';

export interface Staff {
    firstName: string,
    mon?: string,
    tue?: string,
    wed?: string,
    thu?: string,
    fri?: string,
    sat?: string,
    sun?: string
}

function StaffList() {
    const { currentFile, setCurrentFile } = useFile();
    console.log("Inside StaffList")
    const [addStaff, setAddStaff] = useState(false);
    const [editStaff, setEditStaff] = useState(false);
    const [removeStaff, setRemoveStaff] = useState(false);
    /* const renderedStaff = currentFile.staff.map((staffs) => {
        return (
            <div>
                {staffs.firstName}
            </div>
        )
    }); */

    const data = currentFile.staff;

    const config = [
        {
            label: 'Name',
            render: (staff: Staff) => staff.firstName,
            sortValue: (staff: Staff) => staff.firstName
        },
        {
            label: 'Mon',
            render: (staff: Staff) => staff.mon
        },
        {
            label: 'Tue',
            render: (staff: Staff) => staff.tue
        },
        {
            label: 'Wed',
            render: (staff: Staff) => staff.wed
        },
        {
            label: 'Thu',
            render: (staff: Staff) => staff.thu
        },
        {
            label: 'Fri',
            render: (staff: Staff) => staff.fri
        },
        {
            label: 'Sat',
            render: (staff: Staff) => staff.sat
        },
        {
            label: 'Sun',
            render: (staff: Staff) => staff.sun
        },
    ];

    const keyFn = (staff: Staff) => {
        return staff.firstName;
    };
    return (
        <div className="">
            {/*{renderedStaff}*/}
            <SortableTable data={data} config={config} keyFn={keyFn} />
            <div className="space-x-3">
                <button className="my-3 bg-blue-100" onClick={() => { setAddStaff(!addStaff); setEditStaff(false); setRemoveStaff(false); }}>Add Staff</button>
                <button className="my-3 bg-blue-100" onClick={() => { setEditStaff(!editStaff); setAddStaff(false); setRemoveStaff(false); }}>Edit Staff</button>
                <button className="my-3 bg-blue-100" onClick={() => { setRemoveStaff(!removeStaff); setAddStaff(false); setEditStaff(false); }}>Remove Staff</button>
            </div>

            {addStaff &&
                <AddStaffForm />
            }
            {editStaff &&
                <EditStaffForm />    
            }
            {removeStaff &&
                <RemoveStaffForm />
            }
        </div>
    )
}

export default StaffList