import React, { useState } from 'react'
import AuthForm from '../authform/authform';
import classes from './signup.module.css';
import Input from '../../UI/input/input';
import Button from '../../UI/button/button';


const SignUp = () => {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const HandleSubmit = async (event) => {
        event.preventDefault();
        const { userName, email, password, confirmPassword } = user
        console.log(user);
        setUser({
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    }

    const handleChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }


    return (
        <AuthForm>
            <div>
                <h2 className={classes.formHeading}>Please Sign Up</h2>
            </div>
            <form onSubmit={HandleSubmit}>
                <div>
                    <Input
                        placeholder="User Name"
                        type="text"
                        name="userName"
                        value={user.userName}
                        onChange={handleChange} />
                    <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange} />
                    <Input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange} />
                    <Input
                        placeholder="Confirm password"
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange} />
                </div>
                <Button type="submit">Submit</Button>
            </form>

        </AuthForm>
    )
}

export default SignUp
