import { useWebId } from "@solid/react";
import {useHistory} from 'react-router-dom'

export default function LogintHook() {
    const history = useHistory();
	var id = useWebId();
    if (id !== null){
        window.sessionStorage.setItem('pod', id);
    }
    else{
        window.sessionStorage.removeItem('pod');
    }
    return(
        null
    )
}