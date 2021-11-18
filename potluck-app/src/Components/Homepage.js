import React from 'react'
import { useHistory } from 'react-router-dom'

const Homepage = () => {

  const history = useHistory()

  const routeToEvents = () => {
    history.push('/event-list')
  }

  return(
    <div className="row hero-container p-5">
      <div className="col-12 d-flex flex-column align-items-center">
        <h1 className="green mon-medium text-uppercase mb-3">Potluck Party</h1>
        <button onClick={routeToEvents} className="btn-potluck">Events</button>
      </div>
    </div>
  )
}

export default Homepage