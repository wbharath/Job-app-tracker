import styled from 'styled-components'
const Wrapper = styled.nav`
  height: var(--nav-height);
  background: var(--white);
  border-bottom: 1px solid var(--borderColor);
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;

  .nav-center {
    display: flex;
    width: 92%;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--slate-600);
    cursor: pointer;
    transition: var(--transition);
  }
  .toggle-btn:hover {
    background: var(--slate-100);
    color: var(--slate-900);
  }
  .logo-text {
    display: none;
    font-family: var(--monoFont);
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--slate-400);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin: 0;
  }
  .logo {
    display: flex;
    align-items: center;
  }

  .btn-container {
    position: relative;
  }

  .btn {
    background: var(--white);
    color: var(--slate-700);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
    padding: 0.375rem 0.75rem;
    font-size: 0.8125rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    cursor: pointer;
    transition: var(--transition);
    font-family: var(--bodyFont);
  }
  .btn:hover {
    background: var(--slate-50);
    border-color: var(--slate-300);
  }

  .dropdown {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    min-width: 140px;
    background: var(--white);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
    padding: 0.25rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4px);
    transition: var(--transition);
    z-index: 200;
  }
  .show-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .dropdown-btn {
    width: 100%;
    background: transparent;
    border: none;
    color: var(--red-600);
    font-size: 0.8125rem;
    font-weight: 500;
    font-family: var(--bodyFont);
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    text-align: left;
    transition: var(--transition);
  }
  .dropdown-btn:hover {
    background: var(--red-50);
  }

  @media (min-width: 992px) {
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`
export default Wrapper