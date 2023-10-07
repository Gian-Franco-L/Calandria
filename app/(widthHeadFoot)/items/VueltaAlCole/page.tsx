import React from "react";
import Link from "next/link";
import ArticlesContainer from "@/components/ArticlesContainer/ArticlesContainer";
import ArticlesStyles from "@/styles/Articles/Articles.module.css"
import CategoriesFilters from "@/components/CategoriesFilters/CategoriesFilters";
import { fetchArticles } from "@/actions/fetchArticles";
import Filter from "@/components/Filter/Filter";
import FiltersCheckbox from "@/components/FiltersCheckbox/FiltersCheckbox";

export default async function VueltaAlCole(){

  const initialArticles = await fetchArticles(1, 'Precio<')

  return(
    <div className={ArticlesStyles.mainContainer}>
      <section className={ArticlesStyles.homeAndFilters}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <Link href="/items">Productos</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Vuelta al cole</p>
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
          <p>Vuelta al cole</p>
        </article>
      </section>
      <section className={ArticlesStyles.categoriesAndFilersMobile}>
        <CategoriesFilters />
        <Filter />
      </section>
      <section className={ArticlesStyles.categoriesAndItems}>
        <article className={ArticlesStyles.categories}>
          <h3>Categorias</h3>
          <Link href="#">Mochilas</Link>
          <Link href="#">- Jardin</Link>
          <Link href="#">- Primaria</Link>
          <Link href="#">- Secundaria</Link>
          <Link href="#">- Moda urbana</Link>
          <Link href="#">Cartucheras</Link>
          <Link href="#">Bolsos y luncheras</Link>
          <Link href="#">Botellas de agua</Link>
          <Link href="#">Set de jardin personalizado</Link>
          <Link href="#">Cintas identificadoras para ropa</Link>
          <Link href="#">Uniforme San Cayetano</Link>
          <FiltersCheckbox />
        </article>
        <ArticlesContainer initialArticles={initialArticles}/>
      </section>
    </div>
  )
}