import Home from "./pages/home/Home";
import {Route, Switch, Redirect} from "react-router-dom";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import {useAuthContext} from "./hooks/useAuthContext";

function App() {
    const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
        {authIsReady && <>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
            {user && <Home/>}
            {!user && <Redirect to='/login'/>}
        </Route>
        <Route exact path='/signup'>
            {!user && <Signup/>}
            {user && <Redirect to='/'/>}

        </Route>
        <Route exact path='/login'>
            {!user && <Login/>}
            {user && <Redirect to='/'/>}
        </Route>
        {/*<Route path='/*'>*/}
        {/*    {!user && <Login/>}*/}
        {/*    {user && <Redirect to='/'/>}*/}
        {/*</Route>*/}

      </Switch>
        </>
        }
    </div>
  );
}

export default App
