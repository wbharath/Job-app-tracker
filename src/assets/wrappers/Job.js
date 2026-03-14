import styled from 'styled-components'
const Wrapper = styled.article`
  background: var(--white);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadiusLg);
  transition: var(--transition);
  display: grid;
  grid-template-rows: 1fr auto;

  &:hover {
    box-shadow: var(--shadow-2);
    border-color: var(--slate-300);
  }

  header {
    padding: 1.25rem 1.25rem 1rem;
    display: flex;
    align-items: flex-start;
    gap: 0.875rem;
    border-bottom: 1px solid var(--borderColor);
  }

  .main-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 8px;
    background: var(--brand-muted);
    border: 1px solid rgba(13, 122, 95, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--brand-dark);
    font-family: var(--monoFont);
    text-transform: uppercase;
  }

  .info h5 {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--slate-800);
    margin-bottom: 0.125rem;
    font-family: var(--bodyFont);
    line-height: 1.3;
  }
  .info p {
    margin: 0;
    font-size: 0.8125rem;
    color: var(--slate-500);
    max-width: none;
  }

  .content {
    padding: 1rem 1.25rem 1.25rem;
  }

  .content-center {
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem 1.25rem;
    margin-bottom: 1rem;
  }

  /* Status badges */
  .status {
    display: inline-flex;
    align-items: center;
    padding: 0.2rem 0.625rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .APPLIED {
    background: var(--blue-50);
    color: var(--blue-600);
    border: 1px solid var(--blue-100);
  }
  .INTERVIEW {
    background: var(--amber-50);
    color: var(--amber-600);
    border: 1px solid var(--amber-100);
  }
  .REJECTED {
    background: var(--red-50);
    color: var(--red-600);
    border: 1px solid var(--red-100);
  }
  .OFFER {
    background: var(--green-50);
    color: var(--green-600);
    border: 1px solid var(--green-100);
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--borderColor);
  }

  .edit-btn {
    background: var(--slate-50);
    color: var(--slate-700);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
    padding: 0.375rem 0.875rem;
    font-size: 0.8125rem;
    font-weight: 500;
    font-family: var(--bodyFont);
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }
  .edit-btn:hover {
    background: var(--slate-100);
    border-color: var(--slate-300);
    color: var(--slate-900);
  }

  .delete-btn {
    background: transparent;
    color: var(--red-600);
    border: 1px solid transparent;
    border-radius: var(--borderRadius);
    padding: 0.375rem 0.875rem;
    font-size: 0.8125rem;
    font-weight: 500;
    font-family: var(--bodyFont);
    cursor: pointer;
    transition: var(--transition);
  }
  .delete-btn:hover {
    background: var(--red-50);
    border-color: var(--red-100);
  }
`
export default Wrapper