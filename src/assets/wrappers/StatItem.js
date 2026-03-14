import styled from 'styled-components'

const Wrapper = styled.article`
  background: var(--white);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadiusLg);
  padding: 1.5rem;
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-2);
    transform: translateY(-1px);
  }

  .stat-top {
    margin-bottom: 1rem;
  }

  .icon-wrap {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: ${(props) => props.bcg};
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.25rem;
      color: ${(props) => props.color};
    }
  }

  .count {
    display: block;
    font-size: 2.75rem;
    font-weight: 300;
    font-family: var(--headingFont);
    color: var(--slate-900);
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--slate-500);
    margin: 0;
    font-family: var(--bodyFont);
    text-transform: capitalize;
    letter-spacing: 0;
  }
`

export default Wrapper
