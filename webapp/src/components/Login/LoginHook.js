import { useWebId } from "@solid/react";


export default function FriendListHook() {
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