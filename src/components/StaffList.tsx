import React, { useState } from 'react'
import { StaffObject } from '../pages/UploadPage'
import AddStaffForm from './AddStaffForm';

function StaffList(props: StaffObject) {
    const [addStaff, setAddStaff] = useState(false);
    const renderedStaff = props.staff.map((staff) => {
        return (
            <div>
                {staff.firstName}
            </div>
        )
    });
    return (
        <div className="">
            {renderedStaff}
            <button className="my-3" onClick={() => { setAddStaff(!addStaff) }}>Add Staff</button>
            {addStaff &&
                <AddStaffForm />
            }
        </div>
    )
}

export default StaffList