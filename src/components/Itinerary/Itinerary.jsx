import React,{useState} from 'react';
import PropTypes from 'prop-types';
import ItineraryAdd from './ItineraryAdd';

const Itinerary = props => {
    const[itineraries=[
        {city:'Buenos Aires',
        name: 'Me cago en Buenos Aires',
        user: 'El que le gusta Buenos Aires'},
        {city:'Formosa',
        name: 'NEA o Taiwan?',
        user: 'El taiwa que toma terere'}
    
    ]]=useState()

    const [itinerariesAdd, setItinerariesAdd]=useState();

    const addItineraryHandler=event=>{
        event.preventDefault();
        setItinerariesAdd(prevItineraries=>[...prevItineraries,{id:Math.random().toString(),...itinerariesAdd}]);      
     }

    return (
        <div>

    {itineraries.map(it=><p>{it.city} {it.user} {it.name}</p>)}

            <ItineraryAdd itineraries={itineraries}/>
        </div>
    );
};

Itinerary.propTypes = {
    
};

export default Itinerary;