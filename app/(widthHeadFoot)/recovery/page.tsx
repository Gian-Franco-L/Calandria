import React from "react";
import Link from "next/link";
import RecoveryStyles from "@/styles/Recovery/Recovery.module.css"

export default function Recovery(){
  return(
    <div className={RecoveryStyles.mainContainer}>
      <div className={RecoveryStyles.links}>
        <Link href="/">Inicio</Link>
        <p>&nbsp;&#62;&nbsp;</p>
        <Link href="/login">Login</Link>
        <p>&nbsp;&#62;&nbsp;</p>
        <p>Cambiar Contraseña</p>
      </div>
      <h1>Cambiar Contraseña</h1>
      <p className={RecoveryStyles.explanation}>Enviaremos un email para que puedas cambiar tu contraseña.</p>
      <form action="" method="POST">
          <div>
              <label htmlFor="mail">Email</label>
              <input name="mail" type="email" id="mail" required />
          </div>
          <button type="submit">Enviar email</button>
      </form>
    </div>
  )
}