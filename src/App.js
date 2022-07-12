import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";
import './App.css';
import User from "./components/user-component/User";
import Collaborateur from "./components/collaborateur-component/Collaborateur";
import Greffier from "./components/greffier-component/Greffier";
import Primegreffier from "./components/primegreffier-component/Primegreffier";
import Typedossier from "./components/typedossier-component/Typedossier";
import Header from "./Header";
import Menu from "./Menu";
import NotFound from "./components/not-found/not-found";
import Login from "./components/Login-component/Login";
import {useEffect, useState} from "react";
import {isExpired} from "react-jwt";

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
                      <Route exact path="/collaborateur" component={Collaborateur}/>
                      <Route exact path="/greffier" component={Greffier}/>
                      <Route exact path="/primegreffier" component={Primegreffier}/>
                      <Route exact path="/typedossier" component={Typedossier}/>

                      <Route exact path="*" component={NotFound}/>

                  </div>}

              </Switch>
          </Router>
      </div>


  )
}

export default App;


