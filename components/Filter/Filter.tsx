'use client'

import React, { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation';
import filterStyles from '@/styles/Filter/filter.module.css'
import { useSearchParams } from 'next/navigation'

// export default function Filter(){

//   const router = useRouter()

//   const searchParams = useSearchParams()
//   const searchType = searchParams.get('itemTypes')

//   return(
//     <select name="filter" onChange={event => router.push(`/items?filter=${event.target.value}${searchType !== null ? `&itemTypes=${searchType}` : ''}`)} className={filterStyles.filterSelect}>
//       <option value="Precio<">Precio: Menor a mayor</option>
//       <option value="Precio>">Precio: Mayor a menor</option>
//       <option value="Tiempo>">Mas nuevo a mas viejo</option>
//       <option value="Tiempo<">Mas viejo a mas nuevo</option>
//       {/* <option value="+Vendido">Mas vendido</option> */}
//     </select>
//   )
// }


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Filter(){

  const searchParams = useSearchParams()
  let searchFilter = searchParams.get('filter')

  return (
    <DropdownButton id="dropdown-basic-button" title={
      searchFilter === 'Precio<' ? 'Precio: Menor a mayor'
      : searchFilter === 'Precio>' ? 'Precio: Mayor a menor'
      : searchFilter === 'Tiempo>' ? 'Mas nuevo a mas viejo'
      : searchFilter === 'Tiempo<' ? 'Mas viejo a mas nuevo'
      : 'Precio: Menor a mayor'} className={filterStyles.filterSelect}>
      <Dropdown.Item href="items?filter=Precio<">
        <p>Precio: Menor a mayor</p>
      </Dropdown.Item>
      <Dropdown.Item href="items?filter=Precio>">
        <p>Precio: Mayor a menor</p>
      </Dropdown.Item>
      <Dropdown.Item href="items?filter=Tiempo>">
        <p>Mas nuevo a mas viejo</p>
      </Dropdown.Item>
      <Dropdown.Item href="items?filter=Tiempo<">
        <p>Mas viejo a mas nuevo</p>
      </Dropdown.Item>
    </DropdownButton>
  );
}