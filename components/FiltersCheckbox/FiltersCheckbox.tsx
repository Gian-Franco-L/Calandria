'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import FiltersCheckboxStyles from '@/styles/FiltersCheckbox/FilterCheckbox.module.css'

export default function FiltersCheckbox(){

  const searchParams = useSearchParams()
  const searchFilter = searchParams.get('filter')
  const tipes = searchParams.get('itemTypes')
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
    router.push(`${pathname}?${searchFilter !== null ? `filter=${searchFilter}`: ''}${(checks[0].status && checks[1].status) ? '&itemTypes=Hogar|Niños' : checks[0].status ? '&itemTypes=Hogar' : checks[1].status ? '&itemTypes=Niños' : ''}`)
  }, [router, pathname, searchFilter, checks])

  return(
    <>
      <h3>Filtrar por</h3>
      <div className={FiltersCheckboxStyles.inputs}>
        <label>
          <input type="checkbox" name="hogar" checked={checks[0].status === false ? false : true} />Hogar
        </label>
        <label>
          <input type="checkbox" name="niños" checked={checks[1].status === false ? false : true} />Niños
        </label>
        <label>
          <input type="checkbox" name="3" checked={checks[2].status === false ? false : true} />3
        </label>
        <label>
          <input type="checkbox" name="4" checked={checks[3].status === false ? false : true} />4
        </label>
        <label>
          <input type="checkbox" name="5" checked={checks[4].status === false ? false : true} />5
        </label>
        <label>
          <input type="checkbox" name="6" checked={checks[5].status === false ? false : true} />6
        </label>
      </div>
    </>
  )
}