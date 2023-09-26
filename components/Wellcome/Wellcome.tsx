import React from "react";
import WellcomeStyles from "@/styles/Wellcome/Wellcome.module.css"

export default function Wellcome(){
  return(
    <div className={WellcomeStyles.mainContainer}>
      <h1>¡Bienvenido!</h1>
      <p>Encontra todo lo que necesitas para ******* en *******(ejemplo)</p>
    </div>
  )
}