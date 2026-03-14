import styled from 'styled-components'
const Wrapper = styled.section`
  background: var(--white);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadiusLg);
  padding: 2rem;

  .page-title {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--slate-400);
    margin-bottom: 1.5rem;
    font-family: var(--monoFont);
  }

  .form {
    margin: 0;
    border: none;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    background: none;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    gap: 1rem;
  }
  .form-center button {
    align-self: end;
    height: 38px;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    align-self: end;
  }
  .clear-btn {
    background: var(--white);
    color: var(--slate-600);
    border: 1px solid var(--borderColor);
  }
  .clear-btn:hover {
    background: var(--slate-50);
    border-color: var(--slate-300);
    color: var(--slate-900);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: end;
    }
  }
  @media (min-width: 1200px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
export default Wrapper