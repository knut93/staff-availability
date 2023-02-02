import { createContext, useState, useEffect } from 'react';

export const initialState = {
    currentFile: {
        seating: [[]],
        staff: [{ firstName: "" }]
    },
    setCurrentFile: () => { }
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
        firstName: string,
        mon?: string,
        tue?: string,
        wed?: string,
        thu?: string,
        fri?: string,
        sat?: string,
        sun?: string
    }[]
}
export const FileContext = createContext<FileContextInterface>(initialState);

function FileProvider({ children }: { children: React.ReactNode }) {
    const [currentFile, setCurrentFile] = useState<StaffObject>({
        seating: [[]],
        staff: [{ firstName: "" }]
    });
    return (
        <FileContext.Provider value={{ currentFile, setCurrentFile }}>
            {children}
        </FileContext.Provider>
    )
}

export default FileProvider