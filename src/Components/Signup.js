import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../Config/Config';

export const Signup = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationError, setRegistrationError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((cred) => {
                if (cred && cred.user) {
                    db.collection('users').doc(cred.user.uid).set({
                        Name: fullName,
                        Email: email,
                        Password: password
                    }).then(() => {
                        setFullName('');
                        setEmail('');
                        setPassword('');
                        setRegistrationError('');
                        props.history.push('/login');
                    }).catch((err) => {
                        setRegistrationError(err.message);
                    });
                } else {
                    setRegistrationError("User registration failed.");
                }
            }).catch((err) => {
                setRegistrationError(err.message);
            });
    }

    return (
        <div className='container'>
            <br />
            <br />
            <h2>REGISTER HERE</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className="form-label">Enter Full Name</label>
                    <input type="text" className="form-control" required
                        onChange={(e) => setFullName(e.target.value)} value={fullName} />
                </div>
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
                    REGISTER
                </button>
            </form>
            {registrationError && <div className='error-msg'>
                {registrationError}
            </div>}

            <span>Already have an account? Login
                <Link to="login"> here</Link>
            </span>
        </div>
    )
}

