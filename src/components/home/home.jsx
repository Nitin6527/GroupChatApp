import React from 'react'
import classes from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={classes.container}>
            <div className={classes.buttonWrapper}>
                <h1 className={classes.heading}>Group Chat</h1>
                <Link to="/signup"><button className={classes.button}>Sign Up</button></Link>
                <Link to="/signin"><button className={classes.button} >Sign In</button></Link>
            </div>
        </div>
    )
}

export default Home
