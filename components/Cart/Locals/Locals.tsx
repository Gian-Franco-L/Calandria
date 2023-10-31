import React from "react";
import LocalStyles from "../../../styles/Cart/Locals.module.css"
import { PiStorefrontDuotone } from "react-icons/pi"

export default function Locals(){
  return(
    <section className={LocalStyles.locals}>
      <div className={LocalStyles.storeAndTittle}>
        <PiStorefrontDuotone className={LocalStyles.storeIcon} />
        <p>Nuestros locales</p>
      </div>
      <div className={LocalStyles.formRadios}>
        <label>
          <input type="radio" name="e" />
          <div><span>Localización numero uno.</span><span>Gratis</span></div>
        </label>
        <label>
          <input type="radio" name="e" />
          <div><span>Localización numero dos.</span><span>Gratis</span></div>
        </label>
      </div>
      {/* <button className={LocalStyles.location}>
        <p>Localización numero uno.</p>
        <h3>Gratis</h3>
      </button>
      <button className={LocalStyles.location}>
        <p>Localización numero dos.</p>
        <h3>Gratis</h3>
      </button> */}
    </section>
  )
}