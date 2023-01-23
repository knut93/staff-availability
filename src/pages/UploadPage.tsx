import React, { useState, useEffect } from "react";

interface StaffObject {
    seating: {
        firstName: string
    }[][],
    staff: {
        firstName: string
    }[]
}

function UploadPage() {
    const [currentFile, setCurrentFile] = useState<StaffObject>();
    const [fileUploaded, setFileUploaded] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { files } = event.target;
        if (files) {
            const fileRef = files[0] || "";
            const reader = new FileReader();
            reader.readAsText(fileRef, "UTF-8");
            reader.onload = (event: any) => {
                setCurrentFile(JSON.parse(event.target.result))
                console.log(JSON.parse(event.target.result))
                setFileUploaded(true);
            }
        }
    }

    const renderedStaff = currentFile?.staff.map((staff) => {
        return (
            <div>
                {staff.firstName}
            </div>
        )
    });
    const renderedSeating = currentFile?.seating.map((seats) => {
        return (
            <div className="flex">
                {
                    seats.map((seat) => {
                        if (seat != null) {
                            return <div className="border border-indigo-600 h-16 w-16">{seat.firstName}</div>
                        }
                        else {
                            return <div className="border border-indigo-600 h-16 w-16"></div>
                        }
                    })
                }
            </div>

        );
    });

    return (
        <>
            {fileUploaded ? <h2>Please select an option:</h2> : <div><h1>Please upload the staff availability file:</h1>
            <input type="file" onChange={handleChange} /></div>
    }
        </>
    );
};

export default UploadPage;