import styled from 'styled-components'
const Wrapper = styled.section`
  background: var(--white);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadiusLg);
  padding: 1.5rem;

  .search-title {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--slate-400);
    margin-bottom: 1.25rem;
    font-family: var(--monoFont);
  }

  .form {
    width: 100%;
    max-width: 100%;
    background: none;
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 36px;
    font-size: 0.875rem;
  }
  .form-row {
    margin-bottom: 0;
  }
  .btn-block {
    align-self: end;
  }

  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1100px) {
    .form-center {
      grid-template-columns: 2fr 1fr 1fr 1fr auto;
      align-items: end;
    }
  }
`
export default Wrapper