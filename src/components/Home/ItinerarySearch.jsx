import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Home from './LoginForm';

const ItinerarySearch = props => {
    return (
        <>
            <Form style={{
                height: '30vh',
                width: '30vw',
                margin: '10vh',
                textAlign: 'center'
            }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search for Itineraries</Form.Label>
                    <Form.Control type="email" placeholder="add Utinerary" />
                    <Form.Text className="text-muted">
                        Add all itineraries you've done or you might love to do
                </Form.Text>

                    < p >You've being seeing:</p>
                </Form.Group>
            </Form>
        </>
    );
};

ItinerarySearch.propTypes = {

};

export default ItinerarySearch;