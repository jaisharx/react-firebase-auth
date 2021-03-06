import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

function Signup() {
    // refs
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    // states
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // contexts
    const { signup } = useAuth();

    // history
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault(); // stop form default behaviour

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError(''); // clearing the error
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);

            history.push('/'); // redirecting to dashboard
        } catch (e) {
            console.log(e);
            setError(e.message);
        }
        setLoading(false); // loaded
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-2">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button className="w-100" type="submit" disabled={loading}>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    );
}

export default Signup;
