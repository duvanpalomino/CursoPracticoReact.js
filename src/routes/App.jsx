import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import SingUp from '../containers/SingUp';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' Component={Home} />
                    <Route exact path='/login' Component={Login} />
                    <Route exact path='/recovery-password' Component={RecoveryPassword} />
                    <Route exact path='sing-up' Component={SingUp} />;
                    <Route exact path='*' Component={NotFound} />
                </Routes>
            </Layout> 
        </BrowserRouter>
    );
};
export default App;  