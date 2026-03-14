import { FaTimes } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/SmallSidebar'
import Logo from './Logo'
import { toggleSidebar } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import NavLinks from './NavLinks'

const SmallSideBar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => dispatch(toggleSidebar())

  if (!isSidebarOpen) return null

  return (
    <Wrapper>
      <div className="sidebar-container" onClick={toggle}>
        <div className="content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSideBar
