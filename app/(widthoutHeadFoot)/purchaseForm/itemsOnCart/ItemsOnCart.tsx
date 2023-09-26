import React from "react";
import ItemOnCartStyle from "@/styles/PurchaseForm/ItemOnCart.module.css"

interface pageTypes{
  item: {
    Name: string,
    Price: number,
    Date: number,
    Size: string,
    Material: string,
    Stuffing: string,
    Img: string
  }
}
export default function ItemsOnCart({ item }: pageTypes){
  return(
    <div className={ItemOnCartStyle.item}>
      <img src={item.Img} alt="" />
      <p className={ItemOnCartStyle.name}>{item.Name}</p>
      <p className={ItemOnCartStyle.price}>${item.Price},00</p>
    </div>
  )
}