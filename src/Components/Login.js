import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Config/Config';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                setEmail('');
                setPassword('');
                setLoginError('');
                props.history.push('/');
            }).catch(err => setLoginError(err.message));
    }

    return (
        <div className='container'>
            <br />
            <br />
            <h2>LOGIN HERE</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Enter Email</label>
                    <input type="email" className="form-control" required
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Password</label>
                    <input type="password" className="form-control" required
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button type="submit" className="btn btn-success">
                    LOGIN
                </button>
            </form>
            {loginError && <div className='error-msg'>
                {loginError}
            </div>}

            <span>Don't have an account? Create One
                <Link to="signup"> here</Link>
            </span>
        </div>
    )
}

