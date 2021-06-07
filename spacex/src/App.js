
import React, { Component } from 'react';
import Missiondetails from './components/Missiondetails';
import axios from 'axios';

import './App.css';
import loader from './spinner.gif'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: true
     }
  }
 componentDidMount(){
   axios.get(' https://api.spacexdata.com/v3/launches?limit=100')
   .then(response=>{
     console.log(response)
     this.setState({items:response.data})
   })
   .catch(error=>{
     console.log(error)
   })
 }
 render(){
   const{isLoaded,items}=this.state

   if (!isLoaded) {
    return <div className="App-loader-container">
      <div className="App-loader-box">
        <img src={loader} alt="loading..........." />
      </div>
    </div>
  }
else{
   return(
         <div className="App">
          <h1 className="App-header">SpaceX Launch Programs</h1>
          <div>
         
                  {items.map((details) => {
                    return (
                     
                <Missiondetails details={details} />
                    
                    )
                  })
                  }
           
              
              

          </div>
          </div>
          
   )

 }
}
}
export default App