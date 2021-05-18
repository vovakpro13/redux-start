import './App.css';
import Routers from "./components/Routers";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="menu">
                <Link to={'/'}>Home</Link> <br/>
                <Link to={'/counter'}>Counter</Link>
            </div>
            <Routers/>
        </div>
    );
}

export default App;
