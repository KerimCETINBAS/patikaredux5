import { useState } from 'react'
import Header from './components/header'
import Card from './components/card'
import Country from './components/country'

import { useDispatch } from "react-redux"
import { useEffect } from 'react'
import { getByCountryAsync, getCovidStore, getGlobalAsync } from './redux'
function App() {

  const dispatch = useDispatch()
  const covidStore = getCovidStore()

  useEffect(() => {
    
    dispatch(getGlobalAsync()) 
  },[dispatch])
  return (
    <div className="flex flex-col w-full bg-light-400">
      
      <Header />
      <div className='container mx-auto flex gap-12 justify-center'>
        <Card bg="blue"   header="Confirmed" number={covidStore.report?.confirmed?.value || "0"} />
        <Card bg="green"  header="Recovered" number={covidStore.report?.recovered?.value || "0"} />
        <Card bg="red"    header="Deaths"  number={covidStore.report?.deaths?.value || 0}/>
        <Card bg="yellow" header="Active" number={ (covidStore.report?.confirmed?.value || 0) - ((covidStore.report?.recovered?.value || 0) - (covidStore.report?.deaths?.value || 0))} />
      </div>
      <div className="container mx-auto">
        <Country onChange={e => e.detail !== "all" && dispatch(getByCountryAsync(e.detail))} />
      </div>

      <img className='w-202 mx-auto' src={covidStore.report.image} alt="" />
    </div>
  )
}

export default App
