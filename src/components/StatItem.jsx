import Wrapper from '../assets/wrappers/StatItem'

const StatItem = ({ title, count, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <div className="stat-top">
        <div className="icon-wrap">{icon}</div>
      </div>
      <span className="count">{count}</span>
      <h5 className="title">{title}</h5>
    </Wrapper>
  )
}

export default StatItem
