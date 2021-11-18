import axios from 'axios'
import fakeEventsData from '../../Data/fakeEventsData'

export const UPDATE_EVENT = "UPDATE_EVENT"
export const TOGGLE_EDITING = "TOGGLE_EDITING"
export const FETCHING_EVENT_START = "FETCHING_EVENT_START"
export const FETCHING_EVENT_SUCCESS = "FETCHING_EVENT_SUCCESS"
export const FETCHING_EVENT_FAILURE = "FETCHING_EVENT_FAILURE"

export const updateEvent = (newEvent) => {
  return {
    type: UPDATE_EVENT, payload: newEvent
  }
}

export const toggleEditing = () => {
  return {
    type: TOGGLE_EDITING
  }
}

// const headers = {
//   Accept: "application/json"
// }

export const getEvent = () => (dispatch) => {
  // update state to loading 
  dispatch({type: FETCHING_EVENT_START})

  // begin an API request 
  // respond to happy path and sad apth, updating state with API response
  // axios.get("link", {headers})
  fakeEventsData()
    .then(res => {
      console.log(res)
      dispatch({type: FETCHING_EVENT_SUCCESS, payload: res}) // res.data.thingyouwant
    })
    .catch(err => {
      dispatch({type: FETCHING_EVENT_FAILURE, payload: err})
    })

}