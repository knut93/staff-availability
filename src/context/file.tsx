import { createContext, useState, useEffect } from 'react';

const initialState = { 
    currentFile: {
        seating: [[]], 
        staff: [{ firstName: "" }] 
    },
    setCurrentFile: () => {}
}

export interface FileContextInterface {
    currentFile: StaffObject,
    setCurrentFile: Function
}

export interface StaffObject {
    seating: {
        firstName: string
    }[][],
    staff: {
        firstName: string
    }[]
}
export const FileContext = createContext<FileContextInterface>(initialState);

function FileProvider({children}: {children: React.ReactNode}) {
    const [currentFile, setCurrentFile] = useState<StaffObject>({
        seating: [[]], 
        staff: [{ firstName: "" }] 
    });
    return (
        <FileContext.Provider value={{currentFile, setCurrentFile}}>
            {children}
        </FileContext.Provider>
    )
}

export default FileProvider