import React, {FormEvent, useCallback, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Auth from "../components/Auth";

export default function LoginPage () {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = event.target;
            setCredentials({...credentials, [name]: value});
        },
        [credentials, setCredentials]
    );

    const login = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            await axios.post("/app-user/login", null,{
                headers: {
                    "Authorization": "Basic " + window.btoa(`${credentials.username}:${credentials.password}`)
                }
            });
        },
        [credentials]
    );

    return (
        <div className="LoginPage">
            <h1>Login</h1>

            <form onSubmit={login}>
                <div>
                    <input
                        placeholder={"username"}
                        value={credentials.username}
                        name={"username"}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <input
                        placeholder={"password"}
                        type={"password"}
                        name={"password"}
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button>Login</button> or <Link to={"/signup"}>sign up here</Link>
                </div>
            </form>

            <Auth shouldRedirect={false}>
                <div>
                    Du bist schon eingeloggt!!!!
                </div>
            </Auth>
        </div>
    );
}