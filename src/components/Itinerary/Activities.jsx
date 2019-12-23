import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import './Activities.css'

class Activities extends Component {
    constructor(props) { 
        super(props);

        this.state={
            activities:[
                {name:'sanguchito costanera',
                img:'https://i.imgur.com/sUyJUN1.jpg'},
                {name:'mate en Pque Chacabuco',
                img:'https://i.imgur.com/sUyJUN1.jpg'},
                {name:'bingo de Flores',
                 img:'https://i.imgur.com/sUyJUN1.jpg'}
            ] 
        } 
        
    }
    render() {
        return (
            <div>
                <div id="carous">
                    <Carousel wrapAround="true" slidesToShow="3.5" autoplay="true" withoutControls="true"> 
                            {this.state.activities.map(item=>
                        
                                <div id="activity" 
                                style={{
                                height:'13vh', 
                                width:'13vw', 
                                backgroundColor:'red',
                                backgroundImage:`${item.img}`}}>

                                 <h3>{item.name}</h3>        
                                
                                </div>
                                
                            )}
                    </Carousel>
                </div>
              
            </div>
        );
    }
}

export default Activities;