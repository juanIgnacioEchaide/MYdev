import React from 'react';
import { useState } from 'react';
import notLike from'react-icons/lib/fa/heart-o';
import Like from'react-icons/lib/fa/heart';
import Rank from'react-icons/lib/fa/dollar';
import Shared from'react-icons/lib/fa/share-alt';
import Edit from'react-icons/lib/fa/edit';
import Comment from 'react-icons/lib/fa/comment-o'; 
import './Itinerary.css';


const ItineraryStats = props => {
    
    const [
        stats={           
                likes:'10',
                comments:'50',
                shared:'4',
                rank:'3'        
        }]=useState();

    return (
        <div>
            <div>
                <Like className="ml-1"/>{stats.likes}
                <Comment className="ml-1"/>{stats.comments}
                <Rank className="ml-1"/>{stats.rank}
                <Shared className="ml-1"/>{stats.shared}
            <p>comment <Edit/></p>
            </div>
        </div>
    );
};


export default ItineraryStats;