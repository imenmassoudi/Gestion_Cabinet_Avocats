import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
} from 'react-router-dom'
import './App.css'
import User from './components/user-component/User'
import Header from './Header'
import Menu from './Menu'
import NotFound from './components/not-found/not-found'
import Login from './components/Login-component/Login'
import ParamGlobal from './components/Paramatre-component/ParamGlobal'
import { useEffect, useState } from 'react'
import { isExpired } from 'react-jwt'
import HonoraireExtra from './components/Paramatre-component/HonoraireExtra'
import RecetteFinance from './components/Paramatre-component/RecetteFinance'
import Timbre from './components/Paramatre-component/Timbre'
function App() {
  const [currentUser, setCurrentUser] = useState('')
  const history = useHistory()
  const [redirctTo, setRedirctTo] = useState(false)
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      if (isExpired(localStorage.getItem('token'))) {
        localStorage.removeItem(localStorage.getItem('token'))
        setRedirctTo(true)
      } else {
        setRedirctTo(false)
        setCurrentUser(user)

        alert('ahaha' + user)
      }
    }
    //      alert("pfff"+localStorage.getItem("user"))
  }, [])
  if (redirctTo) {
    return <Login />
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Login} />
          {{ currentUser } && (
            <div>
              <Menu />
              <Header />
              <Route exact path='/user' component={User} />
              <Route exact path='/param_global' component={ParamGlobal} />
              <Route exact path='/honoraire_extra' component={HonoraireExtra} />
              <Route exact path='/recette_finance' component={RecetteFinance} />
              <Route exact path='/timbre' component={Timbre} />
              <Route exact path='*' component={NotFound} />
            </div>
          )}
        </Switch>
      </Router>
    </div>
  )
}

export default App
