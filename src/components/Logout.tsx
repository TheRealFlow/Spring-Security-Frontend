import {useCallback} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    const location = useLocation();

    const logout = useCallback(async () => {
        await axios.get("/app-user/logout");
        navigate("/login?redirect=" + encodeURIComponent(location.pathname + location.search));
        window.document.cookie = "";
        window.localStorage.clear();
    }, [location, navigate]);

    return (
        <button onClick={logout}>Logout</button>
    )
}