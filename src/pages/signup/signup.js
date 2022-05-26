import React, {useState} from 'react';
import styles from './Signup.module.css'
import {useSignup} from '../../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { signup, isPending, error } = useSignup()

    const signupFormHandler =(e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }
    return (
        <form onSubmit={signupFormHandler} className={styles['signup-form']}>
            <h1>SignUp</h1>
            <label>
                <span>Display Name</span>
                <input
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            <label>
                <span>Email</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>Password</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>Confirm Password</span>
                <input
                    type="password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    value={passwordConfirm}
                />
            </label>

            {isPending ? <button className='btn' disabled>Loading</button> : <button className='btn'>Submit</button>}
            {error && <p>{error}</p>}
        </form>
    );
};

export default Signup;