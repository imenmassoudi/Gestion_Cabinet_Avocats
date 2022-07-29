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
import Collaborateur from "./components/collaborateur-component/Collaborateur";
import Greffier from "./components/greffier-component/Greffier";
import Primegreffier from "./components/primegreffier-component/Primegreffier";
import Typedossier from "./components/typedossier-component/Typedossier";
import Adversaire from "./components/adversaire-component/Adversaire";
import Emplacement from "./components/emplacementdossier-component/Emplacement";
import ParamGlobal from "./components/Paramatre-component/ParamGlobal";
import HonoraireExtra from './components/Paramatre-component/HonoraireExtra';
import RecetteFinance from './components/Paramatre-component/RecetteFinance';
import Timbre from './components/Paramatre-component/Timbre';
import Client from "./components/client-component/Client";
import Tache from "./components/tache-component/Tache";
import Demandeur from "./components/demandeur-component/Demandeur";
import Reglement from "./components/reglement-component/Reglement";
import Honoraire from "./components/honoraire-compnonent/Honoraire"
import Collaborateurdossier from "./components/collaborateurdossier-component/Collaborateurdossier";
import Clientdossier from "./components/clientdossier-compnoent/Clientdossier";
import SousDossier from "./components/sousdossier-component/SousDossier";
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
                      <Route exact path="/collaborateur" component={Collaborateur}/>
                      <Route exact path="/greffier" component={Greffier}/>
                      <Route exact path="/primegreffier" component={Primegreffier}/>
                      <Route exact path="/typedossier" component={Typedossier}/>
                      <Route exact path="/emplacement" component={Emplacement}/>
                      <Route exact path="/adversaire" component={Adversaire}/>
                      <Route exact path='/param_global' component={ParamGlobal} />
                      <Route exact path='/honoraire_extra' component={HonoraireExtra} />
                      <Route exact path='/recette_finance' component={RecetteFinance} />
                      <Route exact path='/timbre' component={Timbre} />
                      <Route exact path='/client' component={Client} />
                      <Route exact path='/tache' component={Tache} />
                      <Route exact path='/sousdossier' component={SousDossier} />

                      <Route exact path='/demandeur' component={Demandeur} />      
                      <Route exact path='/reglement' component={Reglement} />
                      <Route exact path='/collaborateurdossier' component={Collaborateurdossier } />


                  </div>}
                  <Route exact path="*" component={NotFound}/>

              </Switch>
          </Router>
      </div>


  )
}

export default App;
