import { useEffect, useState } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import { Logo } from '../components'
import FormRow from '../components/FormRow'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out All Fields')
      return
    }
    if (isMember) {
      dispatch(loginUser({ email, password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => navigate('/'), 3000)
    }
  }, [user])

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Logo />
        </div>

        <div
          style={{
            textAlign: 'center',
            marginBottom: '1.75rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--borderColor)'
          }}
        >
          <p
            style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: 'var(--slate-900)',
              fontFamily: 'var(--bodyFont)',
              margin: 0
            }}
          >
            {values.isMember ? 'Welcome back' : 'Create account'}
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--slate-500)',
              margin: '0.25rem 0 0 0'
            }}
          >
            {values.isMember
              ? 'Sign in to your Trackr account'
              : 'Start tracking your job search'}
          </p>
        </div>

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button className="btn btn-block" disabled={isLoading}>
          {isLoading
            ? 'loading...'
            : values.isMember
            ? 'Sign in'
            : 'Create account'}
        </button>

        <p style={{ textAlign: 'center', marginTop: '1rem', marginBottom: 0 }}>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
