// BigSidebar.js (wrapper)
import styled from 'styled-components'
const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    width: 0;
    overflow: hidden;
    transition: width 0.25s ease;
    flex-shrink: 0;

    &.show-sidebar {
      width: 240px;
    }

    .sidebar-container {
      min-height: calc(100vh - var(--nav-height));
      width: 240px;
      position: sticky;
      top: 0;
      background: var(--white);
      border-right: 1px solid var(--borderColor);
    }

    .content {
      padding: 1.5rem 0;
    }

    header {
      height: var(--nav-height);
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      border-bottom: 1px solid var(--borderColor);
      margin-bottom: 0.5rem;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
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
      margin-bottom: 2px;
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
      transition: var(--transition);
      color: var(--slate-400);
    }
    .active {
      background: var(--brand-muted);
      color: var(--brand-dark);
    }
    .active .icon {
      color: var(--brand);
    }
  }
`
export default Wrapper
