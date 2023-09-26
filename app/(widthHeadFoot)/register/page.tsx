import React from "react";
import Link from "next/link";
import RegisterStyles from "@/styles/Register/Register.module.css"

export default function Register(){
  return(
    <div className={RegisterStyles.mainContainer}>
      <div className={RegisterStyles.links}>
        <Link href="/">Inicio</Link>
        <p>&nbsp;&#62;&nbsp;</p>
        {/* <Link href="http://localhost:3000/">Mi cuenta</Link>
        <p>&nbsp;&#62;&nbsp;</p> */}
        <p>Crear cuenta</p>
      </div>
      <h1>Crear una cuenta</h1>
      <p className={RegisterStyles.explanation}>Con una cuenta tendras un historial de compras y se llenaran automaticamente algunos campos con tu informacion.</p>
      <form action="" method="POST">
          <div>
              <label htmlFor="name"><p>Nombre y apellido</p></label>
              <input name="nombre" type="text" id="name" required/>
          </div>
          <div>
              <label htmlFor="mail"><p>Email</p></label>
              <input name="mail" type="email" id="mail" required />
          </div>
          <div>
              <label htmlFor="phone"><p>Telefono</p></label>
              <input name="phone" type="phone" id="phone" required />
          </div>
          <div>
              <label htmlFor="password"><p>Contraseña</p></label>
              <input name="password" type="password" id="password" required />
          </div>
          <div>
              <label htmlFor="confirmPassword"><p>Confirmar contraseña</p></label>
              <input name="confirmPassword" type="password" id="confirmPassword" required />
          </div>
          <button type="submit">Crear cuenta</button>
      </form>
      <div className={RegisterStyles.accountAlready}>
        <p>¿Ya tenés una cuenta?</p>
        <Link href="/login"><p>Iniciá sesión</p></Link>
      </div>
    </div>
  )
}