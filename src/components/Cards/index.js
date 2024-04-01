import {FaDollarSign, FaShoppingCart, FaThumbsUp, FaUser} from 'react-icons/fa'

import './index.css'

const Card = () => {
  // Static data array
  const data = [
    {title: 'Total Revenues', value: '$2,129,430', icon: <FaDollarSign />},
    {title: 'Total Transactions', value: '1,520', icon: <FaShoppingCart />},
    {title: 'Total Likes', value: '9,721', icon: <FaThumbsUp />},
    {title: 'Total Users', value: '892', icon: <FaUser />},
  ]

  const colors = ['#DDEFE0', '#F4ECDD', '#EFDADA', '#DEE0EF']

  return (
    <div className="data-card">
      {data.map((item, index) => (
        <div
          className="data-card"
          key={index}
          style={{backgroundColor: colors[index % colors.length]}}
        >
          <div className="content">
            <h3 className="title">
              {' '}
              <span className="icon">{item.icon}</span>
              {item.title}
            </h3>
            <p className="value">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
