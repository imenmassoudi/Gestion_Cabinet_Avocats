import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";
import './App.css';
import User from "./components/user-component/User";
import Header from "./Header";
import Menu from "./Menu";
import NotFound from "./components/not-found/not-found";
import {useContext, useEffect, useState} from "react";
import {isExpired} from "react-jwt";
import Tribunaux from "./components/tribunaux-component/Tribunaux";
import Services from "./components/tribunaux-component/services-component/Services";
import Login from "./components/Login-component/Login";

function App() {
    const [currentUser, setCurrentUser] = useState("");
    const history = useHistory()
    const [redirctTo, setRedirctTo] = useState(false);
    useEffect(() => {

            const user = localStorage.getItem("user")
            if (user) {
                if(isExpired(localStorage.getItem("token"))){
                    localStorage.removeItem(localStorage.getItem("token"));
                    setRedirctTo(true)

                }else{
                    setRedirctTo(false)
                    setCurrentUser(user);

                    alert("ahaha"+user)
                }

            }
      //      alert("pfff"+localStorage.getItem("user"))


    }, []);
if(redirctTo){
    return <Login/>
}
  return (
      <div>
          <Router>
              <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/" component={Login} />
                  {{currentUser} &&
                  <div>
                      <Menu />
                      <Header/>
                      <Route exact path="/user" component={User}/>

                      <Route exact path="/tribunaux" component={Tribunaux}/>
                      <Route exact path="/services/:id" component={Services}/>
                  </div>}
                  <Route exact path="*" component={NotFound}/>

              </Switch>
          </Router>
      </div>


  )
}

export default App;
