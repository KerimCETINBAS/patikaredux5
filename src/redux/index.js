import { configureStore,  createSlice,  createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'



export const getGlobalAsync = createAsyncThunk("covid/getGlobalAsync", async () => {
    console.log("calisti")
    const response = await fetch("https://covid19.mathdro.id/api", {
        method: "GET",
        headers: { accept: "application/json" }
    }).then(data => data.json())

    console.log( response )

    return response 
})
export const getCountriesAsync = createAsyncThunk("covid/getGlobalAsync", async () => {
  
})

export const getByCountryAsync = createAsyncThunk("covid/getByCountryAsync", async (payload) => {

    const response = await fetch("https://covid19.mathdro.id/api/countries/" + payload.toLowerCase(), {
        method: "GET",
        headers: { accept: "application/json" }
    }).then(data => data.json())

    console.log(response)
})

export const covidSlice = createSlice({
    name: 'covid',
    initialState: {
        report: {},
        country: "all",
        isLoading: false,
        error: null
    },
    reducers: {
        
    },
    extraReducers: {
        [getGlobalAsync.pending]: (store) => { },
        [getGlobalAsync.fulfilled]: (store, { payload }) => {
            if (payload.error) {
               store.error = payload
            }
            store.report = payload,
            store.isLoading = false
        },
       
    }
  })


export const store = configureStore({
    reducer: {
      covid: covidSlice.reducer
  },
})

export const getCovidStore = () => useSelector(store => store.covid)