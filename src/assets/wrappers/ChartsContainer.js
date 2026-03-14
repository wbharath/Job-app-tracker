import styled from 'styled-components'
const Wrapper = styled.section`
  background: var(--white);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadiusLg);
  padding: 1.75rem;
  margin-top: 1.5rem;

  .chart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  .chart-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--slate-700);
  }
  .chart-toggle {
    display: flex;
    gap: 0.25rem;
    background: var(--slate-100);
    border-radius: var(--borderRadius);
    padding: 0.25rem;
  }
  .chart-toggle button {
    background: transparent;
    border: none;
    border-radius: 4px;
    padding: 0.25rem 0.75rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--slate-500);
    cursor: pointer;
    transition: var(--transition);
    font-family: var(--bodyFont);
  }
  .chart-toggle button.active-chart {
    background: var(--white);
    color: var(--slate-800);
    box-shadow: var(--shadow-1);
  }
`
export default Wrapper