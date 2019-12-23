import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const LoginForm = props => {


    const [enteredUsername, setEnteredUsername]=useState('');
    const [enteredPassword, setEnteredPassword]= useState('');

    console.log(enteredUsername,enteredPassword)

    const submitHandler =event=>{
        event.preventDefault();
        /*  */
    }
    return (
       
        <div>
             <Form onSubmit={submitHandler}
            style={{
                height:'30vh',
                width:'30vw',
                margin:'10vh',
                textAlign:'center'
                }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={enteredUsername}
                    onChange={event=>{setEnteredUsername(event.target.value)}}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={enteredPassword}  
                    onChange={event=>{setEnteredPassword(event.target.value)}} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
            </div>            
    );
};

LoginForm.propTypes = {
    
};

export default LoginForm;