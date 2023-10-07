'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function FiltersCheckbox(){

  const searchParams = useSearchParams()
  const searchFilter = searchParams.get('filter')
  const pathname = usePathname()

  const router = useRouter()
  const [checks, setChecks] = useState([
    {name: 'Hogar', status: false},
    {name: 'Niños', status: false},
    {name: 'filter3', status: false},
    {name: 'filter4', status: false},
    {name: 'filter5', status: false},
    {name: 'filter6', status: false}
  ])

  const handleChexbox = (filter: string) =>{

    let newChecks = [...checks]
    let index = newChecks.findIndex(item => item.name === filter)

    if(index !== -1){
      newChecks[index].status = !newChecks[index].status

      setChecks(newChecks)
    }
  }

  useEffect(() =>{
    router.push(`http://localhost:3000/${pathname}?${searchFilter !== null ? `filter=${searchFilter}` : ''}${(checks[0].status && checks[1].status) ? '&itemTypes=Hogar|Niños': checks[0].status ? '&itemTypes=Hogar': checks[1].status ? '&itemTypes=Niños' : ''}`)
  }, [checks])

  return(
    <>
      <h3>Filtrar por</h3>
      <p><input type="checkbox" onChange={() => handleChexbox('Hogar')}/>Hogar</p>
      <p><input type="checkbox" onChange={() => handleChexbox('Niños')}/>Niños</p>
      <p><input type="checkbox" onChange={() => handleChexbox('filter3')}/>Filtro3</p>
      <p><input type="checkbox" onChange={() => handleChexbox('filter4')}/>Filtro4</p>
      <p><input type="checkbox" onChange={() => handleChexbox('filter5')}/>Filtro5</p>
      <p><input type="checkbox" onChange={() => handleChexbox('filter6')}/>Filtro6</p>
    </>
  )
}