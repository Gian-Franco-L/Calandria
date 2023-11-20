import React from "react";
import Link from "next/link";
import AdminStyle from "@/styles/Admin/Admin.module.css"
import productService from "@/services/product"
import AdminItem from "@/components/AdminItem/AdminItem";
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"

const fetchProducts = () =>{
  return productService.getAll()
}

export default async function Admin(){
  const products = await fetchProducts()

  return(
    <div className={AdminStyle.mainContainer}>
      <Link href="/admin/pending" className={AdminStyle.backArrow}><AiOutlineArrowLeft className={AdminStyle.arrowLeft}/></Link>
      <div className={AdminStyle.topHorizontalLineGrid}>
        <h4 className={`${AdminStyle.flex} ${AdminStyle.barName}`}>Nombre</h4>
        <h4 className={`${AdminStyle.flex} ${AdminStyle.barPrice}`}>Precio</h4>
        <h4 className={`${AdminStyle.flex} ${AdminStyle.barStock}`}>Stock</h4>
        <h4 className={`${AdminStyle.flex} ${AdminStyle.barDiscount}`}>Descuento</h4>
        <h4 className={`${AdminStyle.flex} ${AdminStyle.barVisibility}`}>Visibilidad</h4>
        <button className={AdminStyle.barChangeButton}>Cambiar todos</button>
      </div>
      <div className={AdminStyle.centerContentGrid}>
        {
          products.map((item:any) =>{
            return <AdminItem
                    item={item}
                    key={uuidv4()}
                  />
          })
        }
      </div>
    </div>
  )
}


https://calandria.vercel.app/
https://calandria.vercel.app/items
https://calandria.vercel.app/items/Arte/647e62dbcd6fca4721b0844e
https://calandria.vercel.app/login
https://calandria.vercel.app/register
https://calandria.vercel.app/profile
https://calandria.vercel.app/purchaseForm
https://calandria.vercel.app/admin/list
https://calandria.vercel.app/admin/pending