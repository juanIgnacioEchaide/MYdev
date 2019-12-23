import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Home from './LoginForm';
import ItinerarySearch from '../../components/Home/ItinerarySearch';
import UserFavorites from './UserFavorites';



const UserDashboard = props => {
     

    return (
        <div style={{display:'flex', width:'100%'}}>
            <ItinerarySearch/>
            <UserFavorites/>
        </div>
    );
};

UserDashboard.propTypes = {
    
};

export default UserDashboard;