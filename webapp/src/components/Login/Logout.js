import {useHistory} from "react-router-dom";

export default function Logout() {
    const history = useHistory();
    window.sessionStorage.removeItem("user");
    history.push("/");
    history.go(0);
    return(
        null
    );

}