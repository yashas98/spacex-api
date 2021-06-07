import React from "react";
import "./Deatils.css";
import {Card} from 'react-bootstrap';


function Missiondetails({ details}) {
  const {
    flight_number,
    mission_name,
    launch_year,
    links,
    launch_date_unix,
    
    

  } = details

  const imgSrc = links.mission_patch_small;
  
  return (
    
<div className='card'>

      <div className='card-inner'>
        <div className='card-front'>
        
          <img
            src={imgSrc}
            alt="mission patch img not available on api"
            className="mission-image"
          />
          <div className='speech'>
            <p>
              <strong>Flight Number:</strong>
              {flight_number} 
            </p>
            <p>
              <strong>Mission Name:</strong> 
              {mission_name}
            </p>
            <p>
              <strong>Launch Year</strong>
               {launch_year}
            </p>
            
            <p>
              <strong>Launch date(unix):</strong>
               {launch_date_unix}
            </p>
           
          </div>
        </div>
      </div>
     
    </div>
    
  );
}


export default Missiondetails