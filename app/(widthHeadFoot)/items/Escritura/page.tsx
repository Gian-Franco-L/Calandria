import React from "react";
import Link from "next/link";
import ArticlesContainer from "@/components/ArticlesContainer/ArticlesContainer";
import ArticlesStyles from "@/styles/Articles/Articles.module.css"
import CategoriesFilters from "@/components/CategoriesFilters/CategoriesFilters";
import { fetchArticles } from "@/actions/fetchArticles";
import Filter from "@/components/Filter/Filter";
import FiltersCheckbox from "@/components/FiltersCheckbox/FiltersCheckbox";

export default async function Escritura(){

  const initialArticles = await fetchArticles(1, 'Precio<')

  return(
    <div className={ArticlesStyles.mainContainer}>
      <section className={ArticlesStyles.homeAndFilters}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <Link href="/items">Productos</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Escritura</p>
        </article>
        <article>
          <Filter />
        </article>
      </section>
      <section className={ArticlesStyles.homeMobile}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <Link href="/items">Productos</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Escritura</p>
        </article>
      </section>
      <section className={ArticlesStyles.categoriesAndFilersMobile}>
        <CategoriesFilters />
        <Filter />
      </section>
      <section className={ArticlesStyles.categoriesAndItems}>
        <article className={ArticlesStyles.categories}>
          <h3>Categorias</h3>
          <Link href="#">Lápices</Link>
          <Link href="#">- Colores</Link>
          <Link href="#">- Sacapuntas</Link>
          <Link href="#">- Goma de borrar</Link>
          <Link href="#">Boligrafos</Link>
          <Link href="#">- Repuestos</Link>
          <Link href="#">Marcadores</Link>
          <Link href="#">Resaltadores</Link>
          <Link href="#">Roller</Link>
          <Link href="#">- Gel</Link>
          <Link href="#">- Ball</Link>
          <Link href="#">Microfibras</Link>
          <Link href="#">Correctores</Link>
          <Link href="#">Crayones</Link>
          <Link href="#">Portaminas</Link>
          <Link href="#">- Minas</Link>
          <FiltersCheckbox />
        </article>
        <ArticlesContainer initialArticles={initialArticles}/>
      </section>
    </div>
  )
}