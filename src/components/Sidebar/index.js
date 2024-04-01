import {Link} from 'react-router-dom'

import './index.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" className="links">
            Dahboard
          </Link>
        </li>
        <li>
          <Link to="/transactions" className="links">
            Transactions
          </Link>
        </li>
        <li>
          <Link to="/schedulers" className="links">
            Schedulers
          </Link>
        </li>
        <li>
          <Link to="/users" className="links">
            Users
          </Link>
        </li>
        <li>
          <Link to="/Settings" className="links">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
