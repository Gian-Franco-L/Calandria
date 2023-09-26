'use client'
import React, { useState } from "react";
import { BsTruck } from "react-icons/bs"
import { TfiLocationPin } from "react-icons/tfi"
import ShippingStyles from "../../../styles/Cart/Shipping.module.css"

export default function Shipping(){

  const [postal, setPostal] = useState("")
  const [postalStatus, setPostalStatus] = useState("off")

  return(
    <section className={ShippingStyles.shipping}>
        {
          postalStatus === "off"
            &&  <>
                  <div className={ShippingStyles.truckAndTittle}>
                    <BsTruck className={ShippingStyles.truckIcon}/>
                    <p>Medios de envio</p>
                  </div>
                  <form>
                    <label htmlFor="shipping" />
                    <input
                      name="shipping"
                      type="text"
                      className=""
                      id="shipping"
                      placeholder="Ingresa tu codico postal"
                      onChange={({target}) => setPostal(target.value)}
                      required
                    />
                    <button type="button" onClick={() => postal && setPostalStatus("on")}>Calcular</button>
                  </form>
                  <a href="https://www.correoargentino.com.ar/formularios/cpa" target="blank">Como puedo saber mi codigo postal?</a>
                </>
        }
        {
          postalStatus === "on"
            &&  <>
                  <div className={ShippingStyles.postalChange}>
                    <p>Codigo postal: {postal}</p>
                    <button onClick={() => (setPostalStatus("off"), setPostal(""))}>Cambiar cp</button>
                  </div>
                  <div className={ShippingStyles.locationAndTittle}>
                  <BsTruck className={ShippingStyles.locationIcon}/>
                  <p>Envio a domicilio</p>
                </div>
                  <button className={ShippingStyles.location}>
                    <p>Envio standard.</p>
                    <h3>$0000,00</h3>
                  </button>
                  <div className={ShippingStyles.locationAndTittle}>
                    <TfiLocationPin className={ShippingStyles.locationIcon}/>
                    <p>Retirar por</p>
                  </div>
                  <button className={ShippingStyles.location}>
                    <p>Punto de retiro numero uno.</p>
                    <h3>$0000,00</h3>
                  </button>
                  <button className={ShippingStyles.location}>
                    <p>Punto de retiro numero dos.</p>
                    <h3>$0000,00</h3>
                  </button>
                </>
        }
      </section>
  )
}