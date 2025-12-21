import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow } from '../../components'
import { useEffect, useState } from 'react'
import FormRowSelect from '../../components/FormRowSelect'
import {
  clearValues,
  createJob,
  handleChange
} from '../../features/jobs/jobslice'
import { toast } from 'react-toastify'
const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId
  } = useSelector((store) => store.job)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all fields')
      return
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }
  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
    // console.log(name, value)
  }

  const resetValues = () => {
    dispatch(clearValues())
  }
  useEffect(() => {
    dispatch(
      handleChange({
        name: 'jobLocation',
        value: user.location
      })
    )
  }, [])
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={resetValues}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'submitting' : 'submit'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
