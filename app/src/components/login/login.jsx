import './login.css';
import { useState, useContext } from 'react';
import { UserContext } from '../../providers/userprovider';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export const Login = () => {
    const history = useHistory();
    const { updateUser } = useContext(UserContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://10.0.100.205:5070/api/user/login',
                userCreds,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            if (response.status === 200) {
                updateUser(response.data);
                history.push('/');
            }
        } catch (err) {
            console.log(err);
        }
    };
    const [userCreds, setUserCreds] = useState();

    return (
        <div className="login-body">
            <form className="login-form" onSubmit={handleSubmit}>
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
                <div className="register-text">
                    <span>Don't have an account ? </span>
                    <Link to="/register">
                        <span className="register-link">Register</span>
                    </Link>
                </div>
            </form>
        </div>
    );
};
