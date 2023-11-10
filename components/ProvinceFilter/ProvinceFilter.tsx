'use client'

import React, { useState } from "react";
import provinceFilterStyles from '@/styles/ProvinceFilter/provinceFilter.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function PriceTimeFilter(){

  const [provinceElection, setProvinceElection] = useState('Buenos Aires')

  return (
    <DropdownButton id="dropdown-basic-button" title={provinceElection} className={provinceFilterStyles.filterSelect}>
      <Dropdown.Item onClick={() => setProvinceElection('Buenos Aires')}>
        <p>Buenos Aires</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Capital Federal')}>
        <p>Capital Federal</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Catamarca')}>
        <p>Catamarca</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Chaco')}>
        <p>Chaco</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Chubut')}>
        <p>Chubut</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Córdoba')}>
        <p>Córdoba</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Corrientes')}>
        <p>Corrientes</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Entre Ríos')}>
        <p>Entre Ríos</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Formosa')}>
        <p>Formosa</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Jujuy')}>
        <p>Jujuy</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('La Pampa')}>
        <p>La Pampa</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('La Rioja')}>
        <p>La Rioja</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Mendoza')}>
        <p>Mendoza</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Misiones')}>
        <p>Misiones</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Neuquén')}>
        <p>Neuquén</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Río Negro')}>
        <p>Río Negro</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Salta')}>
        <p>Salta</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('San Juan')}>
        <p>San Juan</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('San Luis')}>
        <p>San Luis</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Santa Cruz')}>
        <p>Santa Cruz</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Santa Fe')}>
        <p>Santa Fe</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Santiago del Estero')}>
        <p>Santiago del Estero</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Tierra del Fuego')}>
        <p>Tierra del Fuego</p>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setProvinceElection('Tucumán')}>
        <p>Tucumán</p>
      </Dropdown.Item>
    </DropdownButton>
  );
}