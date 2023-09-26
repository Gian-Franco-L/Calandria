'use client'
import React, { useState } from "react";
import Link from "next/link";
import pendingStyle from "@/styles/Admin/Pending.module.css"
import { AiOutlineArrowRight } from "react-icons/ai"

export default function Admin(){
  const [asd1, setAsd1] = useState('yes')
  const [asd2, setAsd2] = useState('yes')
  const dsa1 = asd1 === 'no' ? 'desapear' : 'asd'
  const dsa2 = asd2 === 'no' ? 'desapear' : 'asd'
  const dsa3 = (asd1 === 'no' && asd2 === 'no') ? 'on' : 'asd'

  return(
    <div className={pendingStyle.mainContainer}>
      <Link href="/admin/list" className={pendingStyle.nextArrow}><AiOutlineArrowRight className={pendingStyle.arrowRight}/></Link>
      <div>
        <h1 style={{textAlign: 'center'}}>Compras</h1>
      </div>
      <div className={`${pendingStyle.empty} ${pendingStyle[dsa3]}`}>
        <h1>Vacio</h1>
      </div>
      <div className={`${pendingStyle[dsa1]}`} style={{marginTop: '1%'}}>
        <h3>#1</h3>
        <div className={pendingStyle.purchaseContainer}>
          <div className={pendingStyle.flex}>
            <p>Nombre:*********</p>
            <p>Apellido:*********</p>
            <p>Correo:*********</p>
            <p>DNI:*********</p>
            <p>Telefono:*********</p>
          </div>
          <div className={pendingStyle.flex}>
            <p>Provincia:*********</p>
            <p>Ciudad:*********</p>
            <p>Barrio?:*********</p>
            <p>Calle:*********</p>
            <p>Numero:*********</p>
            <p>Departamento?:*********</p>
            <p>Codigo postal:*********</p>
          </div>
          <div>
            <p style={{fontWeight: '500'}}>Productos</p>
            <p>Bolso arpillera con mandala</p>
            <p>Colgante live</p>
            <p>Corazon estampado mandala</p>
            <p>Colgante vive</p>
          </div>
          <div>
            <p style={{fontWeight: '500'}}>Opción: Retirar</p>
            <p>Retirará otra persona?</p>
            <p>Nombre:*********</p>
            <p>Apellido:*********</p>
          </div>
          <div className={pendingStyle.total}>
            <button onClick={() => setAsd1('no')}>
              Finalizar
            </button>
            <div>
              Total: $0.000,00
            </div>
          </div>
        </div>
      </div>
      <div className={`${pendingStyle[dsa2]}`} style={{marginTop: '2%'}}>
        <h3>#2</h3>
        <div className={pendingStyle.purchaseContainer}>
          <div className={pendingStyle.flex}>
            <p>Nombre:*********</p>
            <p>Apellido:*********</p>
            <p>Correo:*********</p>
            <p>DNI:*********</p>
            <p>Telefono:*********</p>
          </div>
          <div className={pendingStyle.flex}>
            <p>Provincia:*********</p>
            <p>Ciudad:*********</p>
            <p>Barrio?:*********</p>
            <p>Calle:*********</p>
            <p>Numero:*********</p>
            <p>Departamento?:*********</p>
            <p>Codigo postal:*********</p>
          </div>
          <div>
            <p style={{fontWeight: '500'}}>Productos</p>
            <p>Corazon con deseo x4</p>
            <p>Colgante corazon con malla metalica</p>
            <p>Cuellogorro arcoíris</p>
            <p>Cuellogorro camuflado</p>
            <p>Cuellogorro perrito</p>
            <p>Cuellogorro azul marino</p>
          </div>
          <div>
            <p style={{fontWeight: '500'}}>Opción: Envio</p>
          </div>
          <div className={pendingStyle.total}>
            <button onClick={() => setAsd2('no')}>
              Finalizar
            </button>
            <div>
              Total: $0.000,00
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}