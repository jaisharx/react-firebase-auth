import React from 'react';
import { Container } from 'react-bootstrap';

import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh' }}
        >
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/login" component={Login} />
                            <PrivateRoute path="/update-profile" component={UpdateProfile} />
                            <Route path="/forgot-password" component={ForgotPassword} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
        </Container>
    );
}

export default App;
