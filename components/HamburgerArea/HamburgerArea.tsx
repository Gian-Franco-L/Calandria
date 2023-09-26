import React from "react";
import Link from "next/link";
import HamburgerAreaStyles from "@/styles/HamburgerArea/HamburgerArea.module.css"
import { GrFormDown } from "react-icons/gr"
import { GoPerson } from "react-icons/go"
import CollapseToggle from "../CollapseToggle/CollapseToggle";

interface Pagetypes{
  hamburgerStatus: string,
  setHamburgerStatus: Function
}
export default function HamburgerArea({ hamburgerStatus, setHamburgerStatus }: Pagetypes){

  const hamburgerAreaStatus = hamburgerStatus === "on" ? "openHamburgerArea" : "closeHamburgerArea"

  return(
    <div className={`${HamburgerAreaStyles.hamburgerAreaContainer} ${HamburgerAreaStyles[hamburgerAreaStatus]}`}>
      <div className={HamburgerAreaStyles.tittle}>
        <button className={HamburgerAreaStyles.closeHamburgerAreaButton} onClick={() => setHamburgerStatus("off")}>X</button>
        <div className={HamburgerAreaStyles.signInRegister}>
          <GoPerson className={HamburgerAreaStyles.profileIcon}/>
          <Link href="/register" onClick={() => setHamburgerStatus("off")}><h2>Crear Cuenta</h2></Link>
          <Link href="/login" onClick={() => setHamburgerStatus("off")}><h2>Iniciar Sesion</h2></Link>
        </div>
      </div>
      <div className={HamburgerAreaStyles.collapseOptions}>
        <CollapseToggle option={"Productos"}/>
        <CollapseToggle option={"Marcas"}/>
        <CollapseToggle option={"Otros"}/>
        <div style={{width: '100%', borderTop: '1px solid black'}}></div>
      </div>
    </div>
  )
}