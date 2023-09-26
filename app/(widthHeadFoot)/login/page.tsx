import React from "react";
import Link from "next/link";
import LogInStyles from "@/styles/LogIn/LogIn.module.css"

export default function LogIn(){
  return(
    <div className={LogInStyles.mainContainer}>
      <div className={LogInStyles.links}>
        <Link href="/">Inicio</Link>
        <p>&nbsp;&#62;&nbsp;</p>
        {/* <Link href="/">Mi cuenta</Link>
        <p>&nbsp;&#62;&nbsp;</p> */}
        <p>Login</p>
      </div>
      <h1>Iniciar sesión</h1>
      <form action="" method="POST">
          <div>
              <label htmlFor="mail"><p>Email</p></label>
              <input name="mail" type="email" id="mail" required />
          </div>
          <div>
              <label htmlFor="password"><p>Contraseña</p></label>
              <input name="password" type="password" id="password" required />
          </div>
          <Link href="/profile"><button type="submit"><p>Crear cuenta</p></button></Link>
      </form>
      <div className={LogInStyles.passwordAlready}>
        <Link href="/recovery"><p>¿Olvidaste tu contraseña?</p></Link>
      </div>
    </div>
  )
}