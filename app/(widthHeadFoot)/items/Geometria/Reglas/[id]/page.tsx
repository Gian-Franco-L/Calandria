'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import ItemCant from "@/components/Cart/Items/ItemCant/ItemCant"
import Related from "@/components/Related/Related"
import ItemStyles from "@/styles/Items/Item.module.css"
import { Slides1 } from "@/components/NewsCarousel/Slides/Slides1"
import { Slides2 } from "@/components/NewsCarousel/Slides/Slides2"
import { Slides3 } from "@/components/NewsCarousel/Slides/Slides3"

interface pageTypes{
  params: string
}
export default function item({ params }: pageTypes){

  console.log(params);

  return(
    <main className={ItemStyles.mainContainer}>
      <div className={ItemStyles.itemContainer}>
        {/* <img src={} alt="" /> */}
        <article className={ItemStyles.itemPhotos}>
          <section>
            <div>foto1</div>
            <div>foto2</div>
          </section>
          <main className={ItemStyles.img}>
            <h1>Foto</h1>
          </main>
        </article>
        <article className={ItemStyles.itemPhotosMobile}>
          <main className={ItemStyles.img}>
            <h1>Foto</h1>
          </main>
          <section>
            <div>foto1</div>
            <div>foto2</div>
          </section>
        </article>
        <article className={ItemStyles.itemInfo}>
          <div className={ItemStyles.homeLink}>
            <Link href="/">Inicio</Link>
            <p>&nbsp;&#62;&nbsp;</p>
            <Link href="/items">Productos</Link>
            <p>&nbsp;&#62;&nbsp;</p>
            <Link href="/items/Geometria">Geometria</Link>
            <p>&nbsp;&#62;&nbsp;</p>
            <Link href="/items/Geometria/Reglas">Reglas</Link>
            <p>&nbsp;&#62;&nbsp;</p>
            <p>Item</p>
          </div>
          <h1>Nombre del articulo</h1>
          <h3><span>Precio:</span> $0000,00</h3>
          <h4><span>Disponibilidad:</span> Muchas/Pocas</h4>
          <h4><span>Categoria:</span> xxxxxxxx</h4>
          <h4><span>Marca:</span> xxxxxx</h4>
          <section>
            <div className={ItemStyles.itemCant}>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <button className={ItemStyles.finishBuy}>Agregar al carrito</button>
          </section>
        </article>
      </div>
      <Related>
        <Slides1 />
        <Slides2 />
        <Slides3 />
        <Slides1 />
        <Slides2 />
        <Slides3 />
        <Slides1 />
      </Related>
    </main>
  )
}