import React from "react";
import Link from "next/link";
import ArticlesContainer from "@/components/ArticlesContainer/ArticlesContainer";
import ArticlesStyles from "@/styles/Articles/Articles.module.css"
import CategoriesFilters from "@/components/CategoriesFilters/CategoriesFilters";
import fetchArticles from "@/actions/fetchArticles";
import Filter from "@/components/Filter/Filter";

export default async function Items(){

  const initialArticles = await fetchArticles(1, 'Precio<')

  return(
    <div className={ArticlesStyles.mainContainer}>
      <section className={ArticlesStyles.homeAndFilters}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Categoria</p>
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
        <CategoriesFilters />
        <select name="filter">
          <option value=""><p>Precio: Menor a mayor</p></option>
          <option value="">Precio: Mayor a menor</option>
          <option value="">Mas nuevo a mas viejo</option>
          <option value="">Mas viejo a mas nuevo</option>
          <option value="">Mas vendido</option>
        </select>
      </section>
      <section className={ArticlesStyles.categoriesAndItems}>
        <article className={ArticlesStyles.categories}>
          <h3>Categorias</h3>
          <Link href="#">Tipo1</Link>
          <Link href="#">Tipo2</Link>
          <Link href="#">Tipo3</Link>
          <h3>Filtrar por</h3>
          <p><input type="checkbox" />Filtro1</p>
          <p><input type="checkbox" />Filtro2</p>
          <p><input type="checkbox" />Filtro3</p>
          <p><input type="checkbox" />Filtro4</p>
          <p><input type="checkbox" />Filtro5</p>
          <p><input type="checkbox" />Filtro6</p>
        </article>
        <ArticlesContainer initialArticles={initialArticles}/>
      </section>
    </div>
  )
}
