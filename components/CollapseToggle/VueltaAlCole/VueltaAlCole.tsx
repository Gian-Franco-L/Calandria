'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CollapseToggleStyle from "@/styles/CollapseToggle/CollapseToggle.module.css"

interface PageTypes{
  option: string
}
export default function VueltaAlColeCollapse({ option } : PageTypes) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{width: '100%', color: 'black', textAlign: 'left', backgroundColor: 'transparent', borderRadius: '0px', borderTop: '2px solid #3b151f', borderBottom: 'none', borderRight: 'none', borderLeft: 'none', paddingLeft: '5%'}}
      >
        | {option}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" style={{paddingLeft: '6%'}}>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Mochilas</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Jardín</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Primaria</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Secundaria</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Moda urbana</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">-Cartucheras</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">-Bolsos y luncheras</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">-Set de jardin personalizados</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">-Cintas identificadoras para ropa</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">-Uniforme San Cayetano</Link>
        </div>
      </Collapse>
    </>
  );
}
