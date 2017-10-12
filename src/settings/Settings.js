import React from 'react';
import authHelper from '../helpers/AuthHelper';
import { Redirect } from 'react-router-dom';

const Settings = () => {
    if (authHelper.isAuthenticated === false) {
        return <Redirect to ="/login" />
    }
    return <p>Setings</p>;
}

export default Settings;
