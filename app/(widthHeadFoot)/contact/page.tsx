import React from "react";
import Link from "next/link";
import ContactStyles from "@/styles/Contact/Contact.module.css"

export default function Contact(){
  return(
    <div className={ContactStyles.mainContainer}>
      <div className={ContactStyles.links}>
        <Link href="/">Inicio</Link>
        <p>&nbsp;&#62;&nbsp;</p>
        <p>Contacto</p>
      </div>
      <h1>Contacto</h1>
      <form action="" method="POST">
          <div>
              <label htmlFor="name">Nombre</label>
              <input name="nombre" type="email" id="name" required/>
          </div>
          <div>
              <label htmlFor="mail">Email</label>
              <input name="mail" type="email" id="mail" required />
          </div>
          <div>
              <label htmlFor="phone">Telefono</label>
              <input name="phone" type="phone" id="phone" required />
          </div>
          <div>
              <label htmlFor="consulta">Mensaje</label>
              <textarea name="mensaje" id="consulta" cols={50} rows={13} required></textarea>
          </div>
          <button type="submit">Enviar</button>
      </form>
    </div>
  )
}