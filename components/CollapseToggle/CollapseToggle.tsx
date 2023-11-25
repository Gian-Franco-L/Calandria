'use client'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CollapseToggleStyle from "@/styles/CollapseToggle/CollapseToggle.module.css"
import VueltaAlCole from './VueltaAlCole/VueltaAlCole';
import Escritura from './Escritura/Escritura';
import Carpetas from './Carpetas/Carpetas';
import Cuadernos from './Cuadernos/Cuadernos';
import Calculadoras from './Calculadoras/Calculadoras';
import Arte from './Arte/Arte';
import Geometria from './Geometria/Geometria';
import Hojas from './Hojas/Hojas';
import PapelesCartones from './PapelesCartones/PapelesCartones';
import Pizarras from './Pizarras/Pizarras';
import Otros from './Otros/Otros';

interface PageTypes{
  option: string
}
export default function CollapseToggle({ option } : PageTypes) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{width: '100%', color: 'black', textAlign: 'left', backgroundColor: 'transparent', borderRadius: '0px', borderBottom: 'none', borderRight: 'none', borderLeft: 'none' }}
      >
        {option}
      </Button>
      <Collapse in={open}>
        {
          option === 'Productos'
            ? 
                <div id="example-collapse-text">
                  <VueltaAlCole option={"Vuelta al cole"}/>
                  <Escritura option={"Escritura"}/>
                  <Carpetas option={"Carpetas"}/>
                  <Cuadernos option={"Cuadernos"}/>
                  <Calculadoras option={"Calculadoras"}/>
                  <Arte option={"Arte"}/>
                  <Geometria option={"Geometría"}/>
                  <Hojas option={"Hojas"}/>
                  <PapelesCartones option={"Papeles y cartones"}/>
                  <Pizarras option={"Pizarras"}/>
                  <Otros option={"Otros"}/>
                </div>
            : <div id="example-collapse-text">
                <a href="/contact" className={CollapseToggleStyle.itemCollapse}>Contacto</a>
                <a href="" className={CollapseToggleStyle.itemCollapse}>Ofertas</a>
              </div>
        }
      </Collapse>
    </>
  );
}