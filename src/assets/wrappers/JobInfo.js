import styled from 'styled-components'
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  .icon {
    display: flex;
    align-items: center;
    svg {
      font-size: 0.75rem;
      color: var(--slate-400);
    }
  }
  .text {
    font-size: 0.8125rem;
    color: var(--slate-500);
    font-weight: 400;
  }
`
export default Wrapper