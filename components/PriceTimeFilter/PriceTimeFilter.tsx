'use client'

import React from "react";
import priceTimeFilterStyles from '@/styles/PriceTimeFilter/priceTimeFilter.module.css'
import { useSearchParams } from 'next/navigation'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function PriceTimeFilter(){

  const searchParams = useSearchParams()
  let searchFilter = searchParams.get('filter')

  return (
    <DropdownButton id="dropdown-basic-button" title={
      searchFilter === 'Precio<' ? 'Precio: Menor a mayor'
      : searchFilter === 'Precio>' ? 'Precio: Mayor a menor'
      : searchFilter === 'Tiempo>' ? 'Mas nuevo a mas viejo'
      : searchFilter === 'Tiempo<' ? 'Mas viejo a mas nuevo'
      : 'Precio: Menor a mayor'} className={priceTimeFilterStyles.filterSelect}>
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