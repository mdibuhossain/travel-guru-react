import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RoomDetail from './Components/RoomDetail/RoomDetail';
import Rooms from './Components/Rooms/Rooms';
import { AuthProvider } from './Context/AuthProvider';
import RoomsProvider from './Context/RoomsProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/rooms">
                <Rooms />
              </Route>
              <PrivateRoute exact path="/rooms/:slug">
                <RoomDetail />
              </PrivateRoute>
              <Route exact path="/login">
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
