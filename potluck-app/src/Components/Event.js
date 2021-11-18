import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams, useRouteMatch } from 'react-router-dom'
import { toggleEditing, updateEvent } from '../common/actions/eventActions'

const Event = (props) => {

  const { eventID } = useParams()
  
  // console.log('apievents', props.apiEvent.find(event => event.eventID == eventID))

  const [event, setEvent] = useState(props.apiEvent.find(event => event.eventID == eventID))

  // console.log('event', event)

  // const event = props.apiEvent.find(event => event.eventID == eventID)

  // const [newValues, setNewValues] = useState({
  //   title: '',
  //   description: ''
  // })

  const handleChanges = (e) => {
    setEvent({...event, [e.target.name]: e.target.value});
  }

  return(
    <div>
      <h1>test</h1>

      {!props.editing ? (
        <div>
          <h4>{ event.eventName }</h4>
          <p>{ event.eventLocation }</p>
          <button onClick={() => props.toggleEditing()} > edit </button>
        </div>
      ) : (
        <div>
          <input 
            type="text"
            name="title"
            value={event.title}
            onChange={handleChanges}
          />
          <input 
            type="text"
            name="description"
            value={event.description}
            onChange={handleChanges}
          />
          <button onClick={() => {
            props.updateEvent(event)
          }}>update</button> 
        </div>
        // put event on click to update backend 
      )

      }

      

    </div>
  )
}

// Redux connect components (step 3 -- for each component using redux)
const mapStateToProps = (state) => {
  return {
    apiEvent: state.apiEvent,
    editing: state.editing,
    title: state.title,
    description: state.description
  }
}

const mapDispatchToProps = {updateEvent, toggleEditing}

export default connect(mapStateToProps, mapDispatchToProps)(Event)