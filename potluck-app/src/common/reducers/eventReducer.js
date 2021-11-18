import { UPDATE_EVENT, TOGGLE_EDITING, FETCHING_EVENT_START, FETCHING_EVENT_SUCCESS, FETCHING_EVENT_FAILURE } from '../actions/eventActions'

// define initial state
const initialState = {
  editing: false,
  loading: false,
  error: "",
  apiEvent: [],
  title: "initial title",
  description: "initial description"
}

// define a reducer with all state management funtionc related to the title
const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EVENT:
      return { ...state, title: action.payload.title, description: action.payload.description, editing: false }
    case TOGGLE_EDITING:
      return { ...state, editing: !state.editing }
    case FETCHING_EVENT_START: 
      return { ...state, loading: true }
    case FETCHING_EVENT_SUCCESS:
      return { ...state, loading: false, apiEvent: action.payload }
    case FETCHING_EVENT_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      console.log('error: unknown action type in eventReducer')
      return state;
  }
}

export default eventReducer;