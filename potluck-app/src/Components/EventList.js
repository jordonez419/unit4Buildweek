import React from 'react'
import Event from './Event'
import { connect } from 'react-redux'
import { getEvent } from '../common/actions/eventActions'
import { Link, useLocation } from 'react-router-dom'

const EventList = (props) => {

  const location = useLocation()

  return(
    <div className="row event-container mx-auto">
      <div className="col-12 d-flex justify-content-center">
        <button className="btn-potluck mx-auto my-4" onClick={() => props.getEvent()}>Click me for events / refresh</button>
      </div>

      {props.apiEvent.map(event => (
        <div key={event.eventID} className="col-12 col-lg-6 event-item d-flex flex-column justify-content-center align-items-center">
          <Link className="white event-link my-3" to={{
            pathname: `event-list/${event.eventID}`
            }}>Edit Event</Link>
          <div>
            <h2 className="green mon-medium">Event Name: {event.eventName}</h2>
            <p>Location: {event.eventLocation}</p>
            <p>Time: {event.eventTime}</p>
          </div>

        </div>
      ))}

      {/* <Event /> */}

    </div>
  )
}

// Redux connect components (step 3 -- for each component using redux)
const mapStateToProps = (state) => {
  return {
    apiEvent: state.apiEvent,
    error: state.error,
    loading: state.loading
  }
}

const mapDispatchToProps = {getEvent}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)