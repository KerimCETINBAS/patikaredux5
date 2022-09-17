import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import countries from '../assets/countries'
export default function Country({onChange}) {
  const [country, setCountry] = useState("all")

  useEffect(() => {
    const e = new CustomEvent("onChange", { detail: country })
    onChange && onChange(e)
  })
  return (
    <div className='w-full flex justify-center items-center py-12'>
      <select className='py-3 px-5 m-2' defaultValue={country} onChange={e => setCountry(e.target.value)}>
        <option value="all">All</option>
        {  countries.map(c => <option key={c} value={c}> { c } </option>)  }
      </select>
    </div>
  )
}
