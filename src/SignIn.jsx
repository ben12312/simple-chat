import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./App.css";
import axios from "./lib/axios";

function SignIn() {
    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const loginButton = async () => {
        let response = await axios({
            method: 'POST',
            url: `/user/login`,
            data: formValues
        })
        if (response.data === 'wrong password' || response.data === 'user not found') return setFormErrors({ password: 'Email or password incorrect' })
        if (response.data) localStorage.setItem('accessToken', JSON.stringify(response.data))
        navigate("/")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);
    
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) errors.email = "This is not a valid email format!";
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            // errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    return (
        <>
            <div className="bgImg"></div>
            <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">
                        Signed in successfully
                    </div>
                ) : (
                    console.log("Entered Details", formValues)
                )}

                <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.email}</p>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.password}</p>
                        <button className="fluid ui button blue" onClick={loginButton}>Submit</button>
                    </div>
                </form>
                <div className="text">
                    Not have an account yet? <span onClick={ (e) => navigate('/register') }>Sign Up</span>
                </div>
            </div>{" "}
        </>
    );
}

export default SignIn;
