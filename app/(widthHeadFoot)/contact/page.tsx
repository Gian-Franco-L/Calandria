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
              <label htmlFor="name" />
              <input name="nombre" type="email" id="name" placeholder="Nombre" required/>
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
              <label htmlFor="consulta" />
              <textarea name="mensaje" id="consulta" placeholder="Mensaje" cols={50} rows={10} required></textarea>
          </div>
          <button type="submit">Enviar</button>
      </form>
    </div>
  )
}