import styled from 'styled-components'
const Wrapper = styled.section`
  margin-top: 2rem;

  .jobs-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }
  .jobs-count {
    font-size: 0.875rem;
    color: var(--slate-500);
    font-weight: 500;
  }
  .jobs-count span {
    color: var(--slate-800);
    font-weight: 600;
  }

  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }
  @media (min-width: 992px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
    }
  }
`
export default Wrapper