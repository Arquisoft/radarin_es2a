import {useHistory} from "react-router-dom";

export default function RedirectHook() {
    const history = useHistory();
	history.push("/home");
    history.go(0);
    return(
        null
    );

}