'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CollapseToggleStyle from "@/styles/CollapseToggle/CollapseToggle.module.css"

interface PageTypes{
  option: string
}
export default function Arte({ option } : PageTypes) {
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
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Témperas</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Acuarelas</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Set de dibujo</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Brillantina</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Goma eva</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Pinceles</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Paletas</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Flautas</Link>
        </div>
      </Collapse>
    </>
  );
}
