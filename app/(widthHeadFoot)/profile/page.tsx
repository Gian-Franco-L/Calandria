import React from "react";
import Link from "next/link";
import ProfileStyle from "@/styles/Profile/Profile.module.css"
import productService from "@/services/product"
import ItemsOnCart from "@/app/(widthoutHeadFoot)/purchaseForm/itemsOnCart/ItemsOnCart";
import { v4 as uuidv4 } from "uuid"

const getProducts = async () =>{
  return productService.getAll()
}

export default async function Profile(){
  const allArticles = await getProducts()

  return(
    <div className={ProfileStyle.mainContainer}>
      <h1>Mi Perfil</h1>
      <section className={ProfileStyle.profileContainer}>
        <article className={ProfileStyle.profileInfo}>
          <div className={ProfileStyle.links}>
            <Link href="/">Inicio</Link>
            <p>&nbsp;&#62;&nbsp;</p>
            <p>Perfil</p>
          </div>
          <h4>Informacion de tu cuenta</h4>
          <h5>Nombre:</h5>
          <h5>Apellido:</h5>
          <h5>Correo:</h5>
          <h5>DNI:</h5>
          <h5>Telefono:</h5>
        </article>
        <article>
          <div className={ProfileStyle.purchases}>
            {
              allArticles.slice(0, 3).map((item:any) =>{
                return <ItemsOnCart 
                        item={item}
                        key={uuidv4()}
                      />
              })
            }
            <span className={ProfileStyle.totalContainer}>
              <h5>
                Total: $0.000,00
              </h5>
            </span>
          </div>
          <div className={ProfileStyle.purchases} style={{marginTop: '20px'}}>
            {
              allArticles.slice(0, 5).map((item:any) =>{
                return <ItemsOnCart 
                        item={item}
                        key={uuidv4()}
                      />
              })
            }
            <span className={ProfileStyle.totalContainer}>
              <h5>
                Total: $0.000,00
              </h5>
            </span>
          </div>
        </article>
      </section>
    </div>
  )
}