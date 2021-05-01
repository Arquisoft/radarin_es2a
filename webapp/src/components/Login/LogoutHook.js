import { Redirect } from "react-router-dom";

export default function RedirecttHook() {
    window.sessionStorage.setItem("desconecto","no");
    return(
        <Redirect
            to="/"
        />
    );

}