import { Link } from 'react-router'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="page">
        <div className="info">
          <div className="eyebrow">
            <span className="trust-dot"></span>
            AI-powered job tracking
          </div>
          <h1>
            Track every <em>application,</em> land the right role.
          </h1>
          <p className="sub">
            Trackr syncs your Gmail, auto-detects job emails, and keeps your
            entire job search organized in one place.
          </p>
          <div className="cta-group">
            <Link to="/register" className="btn btn-hero">
              Get started free
            </Link>
            <Link to="/register" className="btn-outline">
              Sign in →
            </Link>
          </div>
          <div className="trust-bar">
            <div className="trust-item">
              <span className="trust-dot"></span>
              Gmail sync
            </div>
            <div className="trust-item">
              <span className="trust-dot"></span>
              AI extraction
            </div>
            <div className="trust-item">
              <span className="trust-dot"></span>
              Chrome extension
            </div>
            <div className="trust-item">
              <span className="trust-dot"></span>
              Open source
            </div>
          </div>
        </div>
        <img src={main} alt="Trackr dashboard" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
