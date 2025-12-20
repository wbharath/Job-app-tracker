import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { getUserFromLocalStorage } from '../../../utils/localStorage'
const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOption: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
}

// export const addJob = createAsyncThunk('/job/add-job', async(,thunkAPI)=>{

// })

const jobSlice = createSlice({
  name: 'addjob',
  initialState
})

export default jobSlice.reducer
