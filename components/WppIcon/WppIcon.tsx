import React from "react";
import { BsWhatsapp } from "react-icons/bs"
import WppIconStyles from "../../styles/WppIcon/WppIcon.module.css"

export default function WppIcon(){
  return(
    <a href="#" className={WppIconStyles.WppIconContainer}>
      <BsWhatsapp style={{ height: '23px', width: '23px', color: 'white' }}/>
    </a>
  )
}