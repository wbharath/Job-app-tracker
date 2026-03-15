import { configureStore } from '@reduxjs/toolkit'
import userSlice from './src/features/user/userSlice'
import jobSlice from './src/features/jobs/jobSlice'
import allJobsSlice from './src/features/alljobs/allJobsSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice
  }
})
