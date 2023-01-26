import { useContext } from 'react';
import { FileContext, FileContextInterface } from '../context/file';

function useFile() {

    return useContext<FileContextInterface>(FileContext);
}

export default useFile; 