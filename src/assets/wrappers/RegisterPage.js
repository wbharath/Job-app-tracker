import styled from 'styled-components'
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--slate-50);
  background-image: radial-gradient(var(--slate-200) 1px, transparent 1px);
  background-size: 24px 24px;

  .form-card {
    width: 90vw;
    max-width: 420px;
    background: var(--white);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadiusLg);
    box-shadow: var(--shadow-3);
    padding: 2.5rem;
    text-transform: capitalize;
  }
  .logo-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .form-title {
    text-align: center;
    font-size: 1.375rem;
    font-weight: 300;
    color: var(--slate-900);
    margin-bottom: 0.25rem;
    font-family: var(--headingFont);
    text-transform: capitalize;
  }
  .form-sub {
    font-size: 0.875rem;
    color: var(--slate-500);
    margin-bottom: 1.75rem;
  }
  .divider {
    height: 1px;
    background: var(--borderColor);
    margin: 1.5rem 0;
  }
  .switch-text {
    text-align: center;
    font-size: 0.875rem;
    color: var(--slate-500);
    margin-top: 1.25rem;
  }
  .member-btn {
    background: transparent;
    border: none;
    color: var(--brand);
    font-weight: 500;
    cursor: pointer;
    font-family: var(--bodyFont);
    font-size: 0.875rem;
    padding: 0 0.25rem;
    transition: var(--transition);
  }
  .member-btn:hover {
    color: var(--brand-dark);
  }
  .btn {
    margin-top: 0.5rem;
  }
`
export default Wrapper
