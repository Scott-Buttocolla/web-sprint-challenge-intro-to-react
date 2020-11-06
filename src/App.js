import React, { useState, useEffect} from 'react';
import axios from "axios";
import Character from './components/Character'
import './App.css';

const App = () => {
  const [data, setData] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    // pulling star wars characters from the api
    axios.get(`https://swapi.py4e.com/api/people`)
      .then(res => {
        // logging the object, was successfully pulled
        console.log(res)
        setData(res.data.results)
      })
      // catching errors
      .catch(err => {
        console.log("ERROR!", err)
      })
// setting data into an empty array to prevent an infinite array
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        //mapping over the object and setting the results to obj
        data.map(obj => {
          return <Character data ={obj}/>
        })
      }
    </div>
  );
}
// pre loaded code but this allows everthing linked to App.js to be to the index.js file to render all the components
// to the page.
export default App;