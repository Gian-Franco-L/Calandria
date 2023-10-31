import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterStyles from "../../styles/Footer/Footer.module.css"
import { BsInstagram } from "react-icons/bs"
import { BiLogoFacebook } from "react-icons/bi"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { FiMail } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import amex from "../../public/medios-de-pago/amex.png"
import argencard from "../../public/medios-de-pago/argencard.png"
import banelco from "../../public/medios-de-pago/banelco.png"
import cabal from "../../public/medios-de-pago/cabal.png"
import cencosud from "../../public/medios-de-pago/cencosud.png"
import diners from "../../public/medios-de-pago/diners.png"
import mastercard from "../../public/medios-de-pago/mastercard.png"
import mercadopago from "../../public/medios-de-pago/mercadopago.png"
import pagofacil from "../../public/medios-de-pago/pagofacil.png"
import rapipago from "../../public/medios-de-pago/rapipago.png"
import tarjetaNaranja from "../../public/medios-de-pago/tarjeta-naranja.png"
import tarjetaShopping from "../../public/medios-de-pago/tarjeta-shopping.png"
import visa from "../../public/medios-de-pago/visa.png"
import oca from "../../public/envios/oca.png"
import mercadoEnvios from "../../public/envios/mercado-envios.png"
import correoArgentino from "../../public/envios/Correo-Argentino.svg"

export default function Footer(){
  return(
    <main className={FooterStyles.mainContainer}>
      <section className={FooterStyles.directLinksContainer}>
        <div className={FooterStyles.directLinks}>
          <Link href="/" style={{}}>Home</Link>
          <Link href="/">Productos</Link>
          <Link href="/contact">Contacto</Link>
          <Link href="/">Quiénes somos</Link>
        </div>
      </section>
      <section className={FooterStyles.socialMedias}>
        <BsInstagram className={FooterStyles.instaIcon} />
        <BiLogoFacebook className={FooterStyles.fbIcon}/>
      </section>
      <section className={FooterStyles.wpp}>
        <AiOutlineWhatsApp className={FooterStyles.wppIcon}/>
        <p>+5400000000</p>
      </section>
      <section className={FooterStyles.mail}>
        <FiMail className={FooterStyles.mailIcon}/>
        <p>email@gmail.com</p>
      </section>
      <section className={FooterStyles.location}>
        <IoLocationOutline className={FooterStyles.locationIcon} />
        <p>Dirección 0000,&nbsp;</p>
        <p>Localidad,&nbsp;</p>
        <p>Provincia de Buenos Aires</p>
      </section>
      <section className={FooterStyles.paySectionContainer}>
        <div className={FooterStyles.paySection}>
          <span><Image src={visa} width={40} height={25} alt="visa"/></span>
          <span><Image src={mastercard} width={40} height={25} alt="mastercard"/></span>
          <span><Image src={banelco} width={40} height={25} alt="banelco"/></span>
          <span><Image src={amex} width={40} height={25} alt="amex"/></span>
          <span><Image src={argencard} width={40} height={25} alt="argencard"/></span>
          <span><Image src={cabal} width={40} height={25} alt="cabal"/></span>
          <span><Image src={cencosud} width={40} height={25} alt="cencosud"/></span>
          <span><Image src={diners} width={40} height={25} alt="diners"/></span>
          <span><Image src={mercadopago} width={40} height={25} alt="mercadopago"/></span>
          <span><Image src={pagofacil} width={40} height={25} alt="pagofacil"/></span>
          <span><Image src={rapipago} width={40} height={25} alt="rapipago"/></span>
          <span><Image src={tarjetaNaranja} width={40} height={25} alt="tarjetaNaranja"/></span>
          <span><Image src={tarjetaShopping} width={40} height={25} alt="tarjetaShopping"/></span>
        </div>
      </section>
      <section className={FooterStyles.shippingContainer}>
        <div className={FooterStyles.shippingSection}>
          <span><Image src={correoArgentino} width={64} height={32} alt="correoArgentino"/></span>
        </div>
      </section>
      <section className={FooterStyles.copyRight}>
        <span><AiOutlineCopyrightCircle /><p>Copyright ********* - 2023</p></span>
        <p>Creado por GianFranco Lombardini</p>
        <p>Todos los derechos reservados.</p>
      </section>
      <section className={FooterStyles.consumersDef}>
        <p>Defensa de las y los consumidores.&nbsp;</p>
        <p>Para reclamos <a href="https://autogestion.produccion.gob.ar/consumidores" target="blank">ingrese aquí</a></p>
      </section>
    </main>
  )
}