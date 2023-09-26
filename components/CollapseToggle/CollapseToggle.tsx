'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CollapseToggleStyle from "@/styles/CollapseToggle/CollapseToggle.module.css"

interface PageTypes{
  option: string
}
function CollapseToggle({ option } : PageTypes) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{width: '100%', color: 'black', textAlign: 'left', backgroundColor: 'transparent', borderRadius: '0px', borderTop: '1px solid black', borderBottom: 'none', borderRight: 'none', borderLeft: 'none' }}
      >
        {option}
      </Button>
      <Collapse in={open}>
        {
          option === 'Productos'
            ? <div id="example-collapse-text">
                <a className={CollapseToggleStyle.itemCollapse} href="/items">Producto1</a>
                <a className={CollapseToggleStyle.itemCollapse} href="/items">Producto2</a>
                <a className={CollapseToggleStyle.itemCollapse} href="/items">Producto3</a>
              </div>
            : option === 'Marcas'
                ? <div id="example-collapse-text">
                    <a className={CollapseToggleStyle.itemCollapse} href="/items">Marca1</a>
                    <a className={CollapseToggleStyle.itemCollapse} href="/items">Marca2</a>
                    <a className={CollapseToggleStyle.itemCollapse} href="/items">Marca3</a>
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

export default CollapseToggle;