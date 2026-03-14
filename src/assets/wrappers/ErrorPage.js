import styled from 'styled-components'
const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;

  .error-code {
    font-size: 6rem;
    font-weight: 300;
    font-family: var(--headingFont);
    color: var(--slate-200);
    line-height: 1;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--slate-800);
    font-family: var(--bodyFont);
    margin-bottom: 0.5rem;
  }
  p {
    color: var(--slate-500);
    margin-bottom: 1.5rem;
    max-width: 36ch;
    text-align: center;
  }
  a {
    color: var(--brand);
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`
export default Wrapper