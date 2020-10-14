import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    // refs
    const emailRef = useRef();

    // states
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // contexts
    const { resetPassword } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault(); // stop form default behaviour

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
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
                    <h2 className="text-center mb-2">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button className="w-100" type="submit" disabled={loading}>
                            Reset Password
                        </Button>
                    </Form>

                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    );
}

export default ForgotPassword;
