import React from "react";
import Link from "next/link";
import ArticlesContainer from "@/components/ArticlesContainer/ArticlesContainer";
import ArticlesStyles from "@/styles/Articles/Articles.module.css"
import CategoriesFilters from "@/components/CategoriesFilters/CategoriesFilters";
import { fetchArticles } from "@/actions/fetchArticles";
import PriceTimeFilter from "@/components/PriceTimeFilter/PriceTimeFilter";
import FiltersCheckbox from "@/components/FiltersCheckbox/FiltersCheckbox";

export default async function Portaminas(){

  const initialArticles = await fetchArticles(1, 'Precio<')

  return(
    <div className={ArticlesStyles.mainContainer}>
      <section className={ArticlesStyles.homeAndFilters}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <Link href="/items">Productos</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <Link href="/items/Escritura">Escritura</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Portaminas</p>
        </article>
        <article>
          <PriceTimeFilter />
        </article>
      </section>
      <section className={ArticlesStyles.homeMobile}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <Link href="/items">Productos</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <Link href="/items/Escritura">Escritura</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Portaminas</p>
        </article>
      </section>
      <section className={ArticlesStyles.categoriesAndFilersMobile}>
        <CategoriesFilters />
        <PriceTimeFilter />
      </section>
      <section className={ArticlesStyles.categoriesAndItems}>
        <article className={ArticlesStyles.categories}>
          <h3>Categorias</h3>
          <div className={ArticlesStyles.linksBorder}>
            <Link href="/items/Escritura/Portaminas/Minas">Minas</Link>
          </div>
          <FiltersCheckbox />
        </article>
        <ArticlesContainer initialArticles={initialArticles}/>
      </section>
    </div>
  )
}