//components
import Header from "./components/Header";
import Route from './components/Route';
//pages
import Home from "./components/pages/Home";
import Start from "./components/pages/Start";
//styling
import './scss/App.scss';

function App() {
    return (
        <div className="app">
            <Header/>
            <Route path='/'>
                <Home/>
            </Route>
            <Route path='/start'>
                <Start/>
            </Route>
        </div>
    );
};

export default App;