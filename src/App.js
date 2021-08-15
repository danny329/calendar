import Dashboard from "./components/Dashboard/Dashboard";
import Editpage from "./components/Editpage/Editpage";
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
export const path = `http://127.0.0.1:8080`;
function App() {
  return (
    <Router>
        <div className="App">
          <div className="header">
            <Link to="/" className="Link">Home</Link>
            <Link to="/add" className="Link">Add Event</Link>
          </div>
          <div className="apptitle">Personal Calendar</div>
        </div>
        <Switch>
          <Route path="/" exact><Dashboard/></Route>
          <Route path="/edit/:id"><Editpage/></Route>
        </Switch>
    </Router>
    
  );
}

export default App;
