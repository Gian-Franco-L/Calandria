'use client'

import React from "react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'


export default function Filter(){

  const router = useRouter()

  const searchParams = useSearchParams()
  const searchType = searchParams.get('itemTypes')

  return(
    <select name="filter" onChange={event => router.push(`/items?filter=${event.target.value}${searchType !== null ? `&itemTypes=${searchType}` : ''}`)}>
      <option value="Precio<"><p>Precio: Menor a mayor</p></option>
      <option value="Precio>"><p>Precio: Mayor a menor</p></option>
      <option value="Tiempo>"><p>Mas nuevo a mas viejo</p></option>
      <option value="Tiempo<"><p>Mas viejo a mas nuevo</p></option>
      {/* <option value="+Vendido"><p>Mas vendido</p></option> */}
    </select>
  )
}