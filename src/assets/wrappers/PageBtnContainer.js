import styled from 'styled-components'
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  .pageBtn {
    width: 36px;
    height: 36px;
    background: var(--white);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--slate-600);
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--bodyFont);
  }
  .pageBtn:hover {
    background: var(--slate-50);
    border-color: var(--slate-300);
    color: var(--slate-900);
  }
  .active {
    background: var(--brand);
    border-color: var(--brand);
    color: var(--white);
  }
  .active:hover {
    background: var(--brand-dark);
    border-color: var(--brand-dark);
    color: var(--white);
  }
  .prev-btn,
  .next-btn {
    height: 36px;
    padding: 0 0.875rem;
    background: var(--white);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
    color: var(--slate-600);
    font-size: 0.8125rem;
    font-weight: 500;
    font-family: var(--bodyFont);
    display: flex;
    align-items: center;
    gap: 0.375rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--slate-50);
    border-color: var(--slate-300);
    color: var(--slate-900);
  }
`
export default Wrapper