import React from "react";
import ItemCantStyles from "@/styles/Cart/ItemCant.module.css"

export default function ItemCant(){
  return(
    <div className={ItemCantStyles.itemCant}>
      <button>-</button>
      <p>1</p>
      <button>+</button>
    </div>
  )
}