import { useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useState } from 'react'
import BarChartComponent from './BarChartComponent'
import AreaChartComponent from './AreaChartComponent'

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications: data } = useSelector((store) => store.allJobs)

  return (
    <Wrapper>
      <div className="chart-header">
        <span className="chart-title">Monthly Applications</span>
        <div className="chart-toggle">
          <button
            type="button"
            className={barChart ? 'active-chart' : ''}
            onClick={() => setBarChart(true)}
          >
            Bar
          </button>
          <button
            type="button"
            className={!barChart ? 'active-chart' : ''}
            onClick={() => setBarChart(false)}
          >
            Area
          </button>
        </div>
      </div>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  )
}

export default ChartsContainer
