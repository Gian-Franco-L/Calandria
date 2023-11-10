'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CollapseToggleStyle from "@/styles/CollapseToggle/CollapseToggle.module.css"

interface PageTypes{
  option: string
}
export default function Escritura({ option } : PageTypes) {
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
        <Link className={CollapseToggleStyle.itemCollapse} href="/">- Lápices</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Colores</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Sacapuntas</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Goma de borrar</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/">- Boligrafos</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Repuestos</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/">- Marcadores</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/">- Resaltadores</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/">- Roller</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Gel</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Ball</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/">- Microfibras</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/">- Correctores</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/">- Crayones</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/">- Portaminas</Link>
        <Link className={CollapseToggleStyle.itemCollapse} href="/" style={{paddingLeft: '9%'}}>-- Minas</Link>
        </div>
      </Collapse>
    </>
  );
}
