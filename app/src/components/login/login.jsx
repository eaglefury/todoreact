import './login.css';
import { useState } from 'react';
import axios from 'axios';
export const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:5070/api/user/login',
                userCreds,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };
    const [userCreds, setUserCreds] = useState();

    return (
        <div className="login-body">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <label htmlFor="username">Username:</label>
                    <input
                        className="txt-box"
                        id="username"
                        type="text"
                        onChange={(e) =>
                            setUserCreds({
                                ...userCreds,
                                username: e.target.value,
                            })
                        }
                    ></input>
                    <label htmlFor="password">Password:</label>
                    <input
                        className="txt-box"
                        id="password"
                        type="text"
                        onChange={(e) =>
                            setUserCreds({
                                ...userCreds,
                                password: e.target.value,
                            })
                        }
                    ></input>
                    <button className="btn" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
