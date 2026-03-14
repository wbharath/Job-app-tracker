import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="brandGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0d7a5f" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#0d7a5f" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#e2e8f0"
          vertical={false}
        />
        <XAxis
          dataKey="data"
          tick={{ fontSize: 12, fill: '#64748b', fontFamily: 'DM Sans' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          allowDecimals={false}
          tick={{ fontSize: 12, fill: '#64748b', fontFamily: 'DM Sans' }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            fontSize: '13px',
            fontFamily: 'DM Sans',
            boxShadow: '0 4px 12px rgba(15,23,42,0.08)'
          }}
        />
        <Area
          type="monotone"
          dataKey="count"
          stroke="#0d7a5f"
          strokeWidth={2}
          fill="url(#brandGradient)"
          dot={{ fill: '#0d7a5f', strokeWidth: 0, r: 4 }}
          activeDot={{ r: 6, fill: '#0d7a5f' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent
