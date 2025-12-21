import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../../../utils/axios'

const initialFilterState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a']
}

const initialState = {
  jobs: [],
  isLoading: true,
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFilterState
}

export const getAllJobs = createAsyncThunk(
  'allJobs/getJobs',
  async (_, thunkAPI) => {
    let url = `/jobs`
    try {
      const resp = await customFetch.get(url, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`
        }
      })
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const allJobsSlice = createSlice({
  name: 'allJobsSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => [(state.isLoading = false)])
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.jobs = payload.jobs
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  }
})

export default allJobsSlice.reducer
