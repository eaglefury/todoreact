import './register.css';
import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export const Register = () => {
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://10.0.100.205:5070/api/user/register',
                userCreds,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.status === 201) {
                history.push('/login');
            }
        } catch (err) {
            console.log(err);
        }
    };
    const [userCreds, setUserCreds] = useState();

    return (
        <div className="register-body">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <label htmlFor="first-name">First Name:</label>
                <input
                    className="txt-box"
                    id="first-name"
                    type="text"
                    onChange={(e) =>
                        setUserCreds({
                            ...userCreds,
                            firstName: e.target.value,
                        })
                    }
                ></input>
                <label htmlFor="last-name">Last Name:</label>
                <input
                    className="txt-box"
                    id="last-name"
                    type="text"
                    onChange={(e) =>
                        setUserCreds({
                            ...userCreds,
                            lastName: e.target.value,
                        })
                    }
                ></input>

                <label htmlFor="email">Email:</label>
                <input
                    className="txt-box"
                    id="email"
                    type="text"
                    onChange={(e) =>
                        setUserCreds({
                            ...userCreds,
                            email: e.target.value,
                        })
                    }
                ></input>

                <label htmlFor="password">Password:</label>
                <input
                    className="txt-box"
                    id="password"
                    type="password"
                    onChange={(e) =>
                        setUserCreds({
                            ...userCreds,
                            password: e.target.value,
                        })
                    }
                ></input>
                <button className="btn" type="submit">
                    Register
                </button>
                <div className="login-text">
                    <span>Already registered ? </span>
                    <Link to="/login">
                        <span className="login-link">Login</span>
                    </Link>
                </div>
            </form>
        </div>
    );
};
