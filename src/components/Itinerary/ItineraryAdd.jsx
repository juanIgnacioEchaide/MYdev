import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ItineraryAdd = props => {
    const itineraries=props.itineraries

    /* Itinerary values */
    const[enteredCity, setEnteredCity]= useState('');
    const[enteredName, setEnteredName]=useState('');

    console.log(enteredCity,enteredName);

    const submitHandler=event=>{
        event.preventDefault();
        /*  */
        const addedItinerary={name:enteredCity,city:enteredName}
        console.log(addedItinerary)
    }

    return (
        <Form onSubmit={submitHandler}
        style={{
            height:'30vh',
            width:'30vw',
            margin:'10vh',
            textAlign:'center'
            }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={enteredCity}
                onChange={event=>{setEnteredCity(event.target.value)}}/>

            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name this Itinerary</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={enteredName}
               onChange={event=>{setEnteredName(event.target.value)}}/>

            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
        </Button>
        </Form>
    );
};

ItineraryAdd.propTypes = {
    
};

export default ItineraryAdd;