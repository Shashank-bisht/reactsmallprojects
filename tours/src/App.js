import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

const removeTour=(id)=>{
  const newTours = tours.filter(tour => tour.id !== id)
  setTours(newTours);
}

  const fetchTours = async () =>{
    setLoading(true)
    try {
       // Attempt to fetch data from the specified URL
    const response = await fetch(url)
    // Attempt to parse the response data as JSON
    const tours = await response.json()
    setLoading(false)
    setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  } 

// it will run only once when page reloads
  useEffect(()=>{
    fetchTours()
  },[])

  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  
  if(tours.length === 0){
    return (
    <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button onClick={fetchTours}>refresh</button>
      </div>
    </main>
    )
  }

  return <main>
    {/* passing removeTour function as a prop */}
    <Tours tours={tours} removeTour = {removeTour}/>
  </main>
}

export default App
