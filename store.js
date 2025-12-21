import { configureStore } from '@reduxjs/toolkit'
import userSlice from './src/features/user/userSlice'
import jobslice from './src/features/jobs/jobslice'
import allJobsSlice from './src/features/alljobs/allJobsSlice'

export const store = configureStore({
    reducer:{
        user: userSlice,
        job: jobslice, 
        allJobs: allJobsSlice
    },
})
