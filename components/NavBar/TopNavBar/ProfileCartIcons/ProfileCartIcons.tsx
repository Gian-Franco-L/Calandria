'use client'
import React, { useEffect } from "react";
import useApearSignRegister from "@/hooks/useApearSignRegister"
import useCartStatus from "@/hooks/useCartStatus";
import Cart from "@/components/Cart/Cart"
import { GoPerson } from "react-icons/go"
import { BsCart2 } from "react-icons/bs"
import ProfileCartIconsStyles from "@/styles/NavBar/ProfileCartIcons.module.css"

interface pageTypes{
  navbarscrollStatus: string
}
export default function ProfileCartIcons({ navbarscrollStatus }: pageTypes){

  const { SignRegister, setSignRegister } = useApearSignRegister()
  const { cartStatus, setCartStatus, cartStatusRef } = useCartStatus()

  // useEffect(() =>{
  //   const body = document.getElementById("body")
  //   if(cartStatus === "on"){
  //     body ? body.style.overflowY = "hidden" : null
  //     body ? body.style.position = "fixed" : null
  //   }else if(cartStatus === "off"){
  //     body ? body.style.overflowY = "inherit" : null
  //     body ? body.style.position = "initial" : null
  //     setTimeout(()=>{
  //     }, 1000)
  //   }
  // }, [cartStatus])

  const signOrRegisterStatus = SignRegister === "on" ? "signOrRegisteOn" : "signOrRegisteOff"

  return(
  <>
    <div className={ProfileCartIconsStyles.mainContainer}>
      <section onClick={() => setSignRegister(prevState => prevState === 'on' ? 'off' : 'on')} className={ProfileCartIconsStyles.profileIconContainer}>
        <GoPerson className={ProfileCartIconsStyles.profileIcon}/>
        <div className={`${ProfileCartIconsStyles.signOrRegister} ${ProfileCartIconsStyles[signOrRegisterStatus]} ${ProfileCartIconsStyles[navbarscrollStatus]}`}>
          <a href="/register">Registrarse</a>
          <a href="/login">Iniciar sesión</a>
        </div>
      </section>
      <section className={ProfileCartIconsStyles.cartIconContainer}>
        <BsCart2 className={ProfileCartIconsStyles.cartIcon} onClick={() => setCartStatus("on")}/>
      </section>
    </div>
    <div className={ProfileCartIconsStyles.cartContainer} ref={cartStatusRef}>
      <div className={ProfileCartIconsStyles.cartBackground} onClick={() => setCartStatus("off")} />
      <Cart
        cartStatus={cartStatus}
        setCartStatus={setCartStatus}
      />
    </div>
  </>
  )
}