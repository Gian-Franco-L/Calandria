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
      <option value="Precio<">Precio: Menor a mayor</option>
      <option value="Precio>">Precio: Mayor a menor</option>
      <option value="Tiempo>">Mas nuevo a mas viejo</option>
      <option value="Tiempo<">Mas viejo a mas nuevo</option>
      {/* <option value="+Vendido">Mas vendido</option> */}
    </select>
  )
}