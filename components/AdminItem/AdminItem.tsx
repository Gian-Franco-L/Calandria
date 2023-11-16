import React from "react";
import AdminItemStyle from "@/styles/Admin/AdminItem.module.css"

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
export default function AdminItem({ item }: pageTypes){
  return(
    <div className={AdminItemStyle.itemGrid}>
      <p className={AdminItemStyle.nameGrid}>{item.Name}</p>
      <p className={`${AdminItemStyle.gridItemsCenterWithBorder} ${AdminItemStyle.priceGrid}`}>
        ${item.Price}
      </p>
      <div className={`${AdminItemStyle.gridItemsCenterWithBorder} ${AdminItemStyle.changePriceGrid}`}>
        <label htmlFor="">$</label>
        <input type="text" />
      </div>
      <p className={`${AdminItemStyle.gridItemsCenterWithBorder} ${AdminItemStyle.stockGrid}`}>
        Cant Stock
      </p>
      <p className={`${AdminItemStyle.gridItemsCenterWithBorder} ${AdminItemStyle.changeStockGrid}`}>
        <input type="text" />
        <label htmlFor="">u</label>
      </p>
      <p className={`${AdminItemStyle.gridItemsCenterWithBorder} ${AdminItemStyle.discountGrid}`}>
        Cant Descuento
      </p>
      <p className={`${AdminItemStyle.gridItemsCenterWithBorder} ${AdminItemStyle.changeDiscountGrid}`}>
        <input type="text" />
        <label htmlFor="">%</label>
      </p>
      <p className={`${AdminItemStyle.gridItemsCenterWithBorder} ${AdminItemStyle.visibilityGrid}`}>
        Visible
      </p>
      <p className={`${AdminItemStyle.gridItemsCenterWithBorder} ${AdminItemStyle.changeVisibilityGrid}`}>
        <input type="text" />
        <label htmlFor="">&nbsp;(si/no)</label>
      </p>
      <button className={AdminItemStyle.changeButton}>Cambiar</button>
    </div>
  )
}