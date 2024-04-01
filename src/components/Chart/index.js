import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const Chart = () => {
  const data = [
    {month: 'week1', userLikes: 100, transactions: 400},
    {month: 'week2', userLikes: 400, transactions: 150},
    {month: 'week3', userLikes: 50, transactions: 250},
    {month: 'week4', userLikes: 450, transactions: 420},
  ]

  return (
    <div className="chart-container">
      <h2>Activities</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="userLikes" stroke="#8884d8" />
        <Line type="monotone" dataKey="transactions" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}

export default Chart
