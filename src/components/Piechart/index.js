import {PieChart, Pie, Tooltip, Legend, Cell} from 'recharts'

const PieChartpage = () => {
  const data = [
    {name: 'Basic Tees', value: 55},
    {name: 'Custom Short Pants', value: 31},
    {name: 'Super Hoodies', value: 14},
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

  return (
    <div className="piechart-container">
      <h1>Top Products</h1>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
    </div>
  )
}

export default PieChartpage
