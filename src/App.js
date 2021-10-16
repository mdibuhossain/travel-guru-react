import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Rooms from './Components/Rooms/Rooms';
import { AuthProvider } from './Context/AuthProvider';
import RoomsProvider from './Context/RoomsProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoomsProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/rooms">
                <Rooms />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </BrowserRouter>
        </RoomsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
