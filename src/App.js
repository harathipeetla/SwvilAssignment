import {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginPage from './components/Login'
import RegistrationPage from './components/Register'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegistrationPage} />
            <Route path="/home" component={Home} />
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
