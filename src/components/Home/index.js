import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidebar from '../Sidebar'

import Dashboard from '../Dashboard'
import Transactions from '../Transactions'
import Schedulers from '../Schedulers'

import './index.css'

function Home() {
  return (
    <Router>
      <div className="dashboard-conatiner">
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route path="/transactions" component={Transactions} />
            <Route path="/schedulers" component={Schedulers} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Home
