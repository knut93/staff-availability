import React, { useState, useEffect } from "react";
import Seating from "../components/Seating";
import StaffList from "../components/StaffList/StaffList";
import useFile from "../hooks/use-file";

function UploadPage() {
    const { currentFile, setCurrentFile } = useFile();
    const [fileUploaded, setFileUploaded] = useState(false);
    const [showSeating, setShowSeating] = useState(false);
    const [showStaffList, setShowStaffList] = useState(false);

    const handleSeatingClick = () => {
        if(showStaffList) { setShowStaffList(false) }
        setShowSeating(!showSeating)
    }

    const handleStaffListClick = () => {
        if(showSeating) { setShowSeating(false) }
        setShowStaffList(!showStaffList)
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { files } = event.target;
        if (files) {
            const fileRef = files[0] || "";
            const reader = new FileReader();
            reader.readAsText(fileRef, "UTF-8");
            reader.onload = (event: any) => {
                setCurrentFile(JSON.parse(event.target.result))
                console.log("Loading object:")
                console.log(JSON.parse(event.target.result))
                setFileUploaded(true);
            }
        }
    }

    const handleSave = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(currentFile)
          )}`;
          const link = document.createElement("a");
          link.href = jsonString;
          var currentDate = new Date().toISOString().substring(0, 19) +"Z"
          link.download = "staff_availability_" + currentDate + ".json";
      
          link.click();
    }

    return (
        <>
            {fileUploaded
                ?
                <div>
                    <h1>Staff Availability:</h1>
                    <div className="py-3 space-x-3">
                        <button className="bg-blue-100" onClick={handleSeatingClick}>Seating</button>
                        <button className="bg-blue-100" onClick={handleStaffListClick}>Staff List</button>
                        <button className="bg-blue-100" onClick={handleSave}>Save Changes</button>
                    </div>
                    {showSeating && <Seating />}
                    {showStaffList && < StaffList />}
                </div>
                :
                <div><h1>Please upload the staff availability file:</h1>
                    <input className="py-3" type="file" onChange={handleChange} /></div>
            }
        </>
    );
};

export default UploadPage;