import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FcGoogle} from 'react-icons/fc'
import {FaApple} from 'react-icons/fa'

import './index.css'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginError: '',
    }
  }

  handleLogin = () => {
    const {username, password} = this.state
    const storedusername = Cookies.get('username')
    const storedPassword = Cookies.get('password')
    if (username === storedusername && password === storedPassword) {
      this.props.history.push('/home')
    } else {
      this.setState({loginError: 'Invalid email or password'})
    }
  }

  componentDidMount() {
    const isLoggedIn = Cookies.get('isLoggedIn')
    if (isLoggedIn) {
      this.props.history.replace('/home')
    }
  }

  render() {
    const {username, password, loginError} = this.state

    return (
      <div className="sign-container-page">
        <div className="sign-in-page-text">
          <h1>Board.</h1>
        </div>
        <div className="sign-in-page-login">
          <h1 className="sign-heading">Sign In</h1>
          <p className="sign-para">Sign in to your account</p>
          <div className="signin-icons-container">
            <button className="button-google">
              <FcGoogle className="google-icon" />
              <p className="para-google">Sign in with Google</p>
            </button>
            <button className="button-apple">
              <FaApple className="apple-icon" />
              <p className="para-apple">Sign in with apple</p>
            </button>
          </div>
          <div className="login-details">
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={e => this.setState({username: e.target.value})}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={e => this.setState({password: e.target.value})}
              />
            </div>
          </div>
          <button onClick={this.handleLogin}>Login</button>
          <p>{loginError}</p>
          <p>
            Don't have an account? <Link to="/register">Register Here</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default LoginPage
