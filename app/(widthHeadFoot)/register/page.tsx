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
      <h6 className={RegisterStyles.explanation}>Con una cuenta tendras un historial de compras y se llenaran automaticamente algunos campos con tu informacion.</h6>
      <form action="" method="POST">
          <div>
              <label htmlFor="name" />
              <input name="nombre" type="text" id="name" placeholder="Nombre y apellido" required/>
          </div>
          <div>
              <label htmlFor="mail" />
              <input name="mail" type="email" id="mail" placeholder="Email" required />
          </div>
          <div>
              <label htmlFor="phone" />
              <input name="phone" type="phone" id="phone" placeholder="Telefono" required />
          </div>
          <div>
              <label htmlFor="password" />
              <input name="password" type="password" id="password" placeholder="Contraseña" required />
          </div>
          <div>
              <label htmlFor="confirmPassword" />
              <input name="confirmPassword" type="password" id="confirmPassword" placeholder="Confirmar contraseña" required />
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