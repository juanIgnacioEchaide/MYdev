import React from 'react';
import Activities from './Activities';
import './Itinerary.css';
import { useState } from 'react';
import User from '../../assets/user_logo.png';
import ItineraryStats from './ItineraryStats';

const Itinerary = props => {

    const[itineraries=[
        {city:'Buenos Aires',
        name: 'Me cago en Buenos Aires',
        user: 'El que le gusta Buenos Aires'},
        {city:'Formosa',
        name: 'NEA o Taiwan?',
        user: 'El taiwa que toma terere'}
    
    ]]=useState()


        
    

    return (
        <div id="itineraryContainer" className="container-fluid">
               {/* Itineraries by user */}
            {itineraries.map(
            item=>
                <div id="eachItineraryContainer">

                    <div id="itineraryUser" className="row col-md-12">
                        {/* User's profile picture  */}
                       <img id="userPic" src={User}/>
                        {/* Itineraries' data */}
                         <h3>{item.user}</h3>

                {/* Itinerary's statistics */}
                <ItineraryStats/>
                </div>


                <div id="activityDisplayContainer">
                {/* Itinerary´s name & city  */}
                    <h1>{item.name}</h1> 
                     {item.city}  

                {/* Carousel of  Itineraries'activities */}
                <Activities className="col-md-8 p-3"/>

                </div>
            </div>
            )}



           
        </div>
    );
};


export default Itinerary;

