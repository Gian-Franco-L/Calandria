import React from "react";
import Link from "next/link";
import ArticlesContainer from "@/components/ArticlesContainer/ArticlesContainer";
import ArticlesStyles from "@/styles/Articles/Articles.module.css"
import CategoriesFilters from "@/components/CategoriesFilters/CategoriesFilters";
import { fetchArticles } from "@/actions/fetchArticles";
import Filter from "@/components/Filter/Filter";
import FiltersCheckbox from "@/components/FiltersCheckbox/FiltersCheckbox";

export default async function Geometria(){

  const initialArticles = await fetchArticles(1, 'Precio<')

  return(
    <div className={ArticlesStyles.mainContainer}>
      <section className={ArticlesStyles.homeAndFilters}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <Link href="/items">Productos</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Geometria</p>
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
          <p>Geometria</p>
        </article>
      </section>
      <section className={ArticlesStyles.categoriesAndFilersMobile}>
        <CategoriesFilters />
        <Filter />
      </section>
      <section className={ArticlesStyles.categoriesAndItems}>
        <article className={ArticlesStyles.categories}>
          <h3>Categorias</h3>
          <Link href="#">Reglas</Link>
          <Link href="#">Compás</Link>
          <FiltersCheckbox />
        </article>
        <ArticlesContainer initialArticles={initialArticles}/>
      </section>
    </div>
  )
}