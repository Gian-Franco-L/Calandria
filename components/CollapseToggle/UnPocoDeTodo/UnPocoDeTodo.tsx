'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CollapseToggleStyle from "@/styles/CollapseToggle/CollapseToggle.module.css"

interface PageTypes{
  option: string
}
export default function UnPocoDeTodo({ option } : PageTypes) {
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
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Libros para colorear</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Agendas</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Adhesivos</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Tableros</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Bastidores</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Masas</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Globos terráqueos</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Cortantes</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Baterias y pilas</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Fantasia</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Otros</Link>
        </div>
      </Collapse>
    </>
  );
}
