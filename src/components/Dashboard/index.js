import {Component} from 'react'
import './index.css'

import Chart from '../Chart'
import PieChartpage from '../Piechart'
import Card from '../Cards'
import Schedule from '../TodaySchedule'
import {FaBell} from 'react-icons/fa'

class Dashbord extends Component {
  render() {
    return (
      <div className="dashboard-details">
        <div className="nav-bar-container">
          <div className="name-container">
            <h1>Dashboard</h1>
          </div>
          <div className="profile-container">
            <input type="search" placeholder="search here" />
            <FaBell />
            <img
              src="https://res.cloudinary.com/dzvtpzf6b/image/upload/v1711969749/Mask_Group_youmbs.png"
              alt="profile"
            />
          </div>
        </div>
        <div className="data-container">
          <Card />
          <Chart />
          <div className="pie-chart-schedule">
            <PieChartpage />
            <Schedule />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashbord
