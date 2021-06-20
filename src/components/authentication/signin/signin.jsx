import React, { useState } from 'react';
import AuthForm from '../authform/authform';
import classes from './signin.module.css';
import Input from '../../UI/input/input';
import Button from '../../UI/button/button'


const SignIn = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const HandleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <AuthForm>
            <div>
                <h2 className={classes.formHeading}>Please Sign In</h2>
            </div>
            <form onSubmit={HandleSubmit}>
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
            </form>
            <Button type="submit">Submit</Button>

        </AuthForm>
    )
}

export default SignIn
