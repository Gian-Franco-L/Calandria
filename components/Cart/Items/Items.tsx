import React from "react"
import Image from "next/image"
import ItemCant from "./ItemCant/ItemCant"
import CartItemsStyles from "../../../styles/Cart/CartItems.module.css"
import { BsTrash } from "react-icons/bs"

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
export default function Items({ item }: pageTypes){
  return(
    <div className={CartItemsStyles.item}>
      <Image
        src={item.Img}
        alt=""
        width={500}
        height={500}
      />
      <div className={CartItemsStyles.itemNameCant}>
        <p>{item.Name}</p>
        <ItemCant />
      </div>
      <div className={CartItemsStyles.itemTrashPrice}>
        <BsTrash className={CartItemsStyles.trash}/>
        <p>${item.Price},00</p>
      </div>
    </div>
  )
}