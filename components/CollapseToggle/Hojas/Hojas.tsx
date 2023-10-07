'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CollapseToggleStyle from "@/styles/CollapseToggle/CollapseToggle.module.css"

interface PageTypes{
  option: string
}
export default function Hojas({ option } : PageTypes) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{width: '100%', color: 'black', textAlign: 'left', backgroundColor: 'transparent', borderRadius: '0px', borderTop: '1px solid black', borderBottom: 'none', borderRight: 'none', borderLeft: 'none', paddingLeft: '5%'}}
      >
        | {option}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" style={{paddingLeft: '6%'}}>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Repuestos hojas escolares</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Separadores</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Etiquetas</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Folios</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Blocks</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Recibos</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Resmas</Link>
        </div>
      </Collapse>
    </>
  );
}
