import { Link, Route, Switch, useParams } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Event from './Components/Event';
import EventList from './Components/EventList';
import fakeEventsData from './Data/fakeEventsData'
import fakeUserData from './Data/fakeEventsData'
import Account from './Components/Account';

function App() {

  // fakeEventsData().then(res => console.log(res)).catch(err => console.log(err))

  // fakeUserData().then(res => console.log(res)).catch(err => console.log(err))

  const { id } = useParams()

  return (
    <div className="App container-fluid">
      <nav className="nav-container row py-3">
        {/* Nav Bar */}
        <div className="nav-links col-12 d-flex justify-content-evenly">
          <Link to="/" className="nav-link-item green mon-medium text-uppercase">Home</Link>
          <Link to="/event-list" className="nav-link-item green mon-medium text-uppercase">Events</Link>
          <Link to="/account" className="nav-link-item green mon-medium text-uppercase">Account</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/event-list" component={EventList} />
        <Route exact path="/event-list/:eventID" component={Event} />
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
