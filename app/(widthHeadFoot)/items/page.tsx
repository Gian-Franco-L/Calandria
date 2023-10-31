import React from "react";
import Link from "next/link";
import ArticlesContainer from "@/components/ArticlesContainer/ArticlesContainer";
import ArticlesStyles from "@/styles/Articles/Articles.module.css"
import CategoriesFilters from "@/components/CategoriesFilters/CategoriesFilters";
import { fetchArticles } from "@/actions/fetchArticles";
import Filter from "@/components/Filter/Filter";
import FiltersCheckbox from "@/components/FiltersCheckbox/FiltersCheckbox";

export default async function Items(){

  const initialArticles = await fetchArticles(1, 'Precio<')

  return(
    <div className={ArticlesStyles.mainContainer}>
      <section className={ArticlesStyles.homeAndFilters}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Productos</p>
        </article>
        <article>
          <Filter />
        </article>
      </section>
      <section className={ArticlesStyles.homeMobile}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Categoria</p>
        </article>
      </section>
      <section className={ArticlesStyles.categoriesAndFilersMobile}>
        {/* <CategoriesFilters /> */}
        <Filter />
      </section>
      <section className={ArticlesStyles.categoriesAndItems}>
        <article className={ArticlesStyles.categories}>
          <h3>Categorias</h3>
          <Link href="/items/VueltaAlCole">Vuelta al cole</Link>
          <Link href="/items/Escritura">Escritura</Link>
          <Link href="/items/LibrosParaColorear">Libros para colorear</Link>
          <Link href="/items/Carpetas">Carpetas</Link>
          <Link href="/items/Cuadernos">Cuadernos</Link>
          <Link href="/items/Agendas">Agendas</Link>
          <Link href="/items/Calculadoras">Calculadoras</Link>
          <Link href="/items/Arte">Arte</Link>
          <Link href="/items/Geometria">Geometría</Link>
          <Link href="/items/Adhesivos">Adhesivos</Link>
          <Link href="/items/Hojas">Hojas</Link>
          <Link href="/items/PapelesYCartones">Papeles y cartones</Link>
          <Link href="/items/Pizarras">Pizarras</Link>
          <Link href="/items/Tableros">Tableros</Link>
          <Link href="/items/Bastidores">Bastidores</Link>
          <Link href="/items/Masas">Masas</Link>
          <Link href="/items/GlobosTerraqueos">Globos terráqueos</Link>
          <Link href="/items/Cortantes">Cortantes</Link>
          <Link href="/items/BateriasYPilas">Baterias y pilas</Link>
          <Link href="/items/UnPocoDeTodo">Un poco de todo</Link>
          <FiltersCheckbox />
        </article>
        <ArticlesContainer initialArticles={initialArticles}/>
      </section>
    </div>
  )
}
