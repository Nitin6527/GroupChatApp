import React from 'react'
import classes from './authform.module.css';

const AuthForm = (props) => {
    return (
        <div className={classes.formContainer}>
            <div className={classes.imageWrapper} />
            <div className={classes.form}>
                {props.children}
            </div>
        </div>
    )
}

export default AuthForm
