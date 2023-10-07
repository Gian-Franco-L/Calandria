'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CollapseToggleStyle from "@/styles/CollapseToggle/CollapseToggle.module.css"

interface PageTypes{
  option: string
}
export default function Cuadernos({ option } : PageTypes) {
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
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- A4</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- A5</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- A6</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Escolares</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Económicos</Link>
          <Link className={CollapseToggleStyle.itemCollapse} href="/">- Cuaderno dibujo</Link>
        </div>
      </Collapse>
    </>
  );
}
