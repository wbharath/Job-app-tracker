import styled from 'styled-components'

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.5);
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 200;
    opacity: 1;
  }
  .content {
    background: var(--white);
    width: 260px;
    height: 100%;
    padding: 1.5rem 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--borderColor);
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--slate-500);
    cursor: pointer;
    transition: var(--transition);
    font-size: 0.8125rem;
  }
  .close-btn:hover {
    background: var(--slate-100);
    color: var(--slate-900);
  }
  header {
    padding: 0.5rem 0 1.5rem;
    border-bottom: 1px solid var(--borderColor);
    margin-bottom: 1rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--slate-500);
    padding: 0.5rem 0.75rem;
    border-radius: var(--borderRadius);
    font-size: 0.875rem;
    font-weight: 500;
    transition: var(--transition);
  }
  .nav-link:hover {
    background: var(--slate-50);
    color: var(--slate-900);
  }
  .nav-link:hover .icon {
    color: var(--brand);
  }
  .icon {
    font-size: 1rem;
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
    color: var(--slate-400);
    transition: var(--transition);
  }
  .active {
    background: var(--brand-muted);
    color: var(--brand-dark);
  }
  .active .icon {
    color: var(--brand);
  }
`

export default Wrapper
