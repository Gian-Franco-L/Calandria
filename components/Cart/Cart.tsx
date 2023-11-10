import React, { useEffect, useState } from "react"
import CartStyles from "../../styles/Cart/Cart.module.css"
import productService from "../../services/product"
import Items from "./Items/Items"
import Locals from "./Locals/Locals"
import Shipping from "./Shipping/Shipping"
import { MdOutlineCancel } from "react-icons/md"
import { v4 as uuidv4 } from "uuid"

interface pageTypes{
  cartStatus: string,
  setCartStatus: Function
}
export default function Cart({cartStatus, setCartStatus}: pageTypes){

  const [allArticles, setAllArticles] = useState<any[]>([]);
  const cartItemsStatus = cartStatus === "on" ? "openCart" : "closeCart"

  useEffect(() =>{
    productService.getAll()
      .then((res) => {
        let articlesAux = []
        for(let i=0; i<10; i++){
          articlesAux.push(res[i])
        }
        setAllArticles(articlesAux)
      })
  }, [])

  // useEffect(() => {
  //   const body = document.getElementById("body")
  //   if(cartStatus === "off"){
  //     body ? body.style.overflowY = "inherit" : null
  //     body ? body.style.position = "initial" : null
  //   }
  // }, [cartStatus])

  return(
    <div className={`${CartStyles.cartContainer} ${CartStyles[cartItemsStatus]}`}>
      <div className={CartStyles.tittle}>
        <h1>Carrito de compras</h1>
        <button className={CartStyles.closeCartButton} onClick={() => setCartStatus("off")}><MdOutlineCancel className={CartStyles.closeCartIcon}/></button>
      </div>
      <div className={CartStyles.cartArticles}>
        {
          allArticles.map(item =>{
            return <Items 
                     item={item}
                     key={uuidv4()}
                   />
          })
        }
      </div>
      <div className={CartStyles.greyBar} />
      <div className={CartStyles.price}>
        <p>Total:</p>
        <p>$0.000,00</p>
      </div>
      <div className={CartStyles.greyBar} />
      <Shipping />
      <div className={CartStyles.greyBar}/>
      <Locals />
      <div className={CartStyles.greyBar}/>
      <a href="/purchaseForm" className={CartStyles.finishBuyContainer}>
        <button className={CartStyles.finishBuy}>
          <h5>Finalizar Compra</h5>
        </button>
      </a>
    </div>
  )
}