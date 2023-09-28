'use server'

import productService from "@/services/product"

export async function fetchArticles(page: number){
  const articlesCant = 10

  const getArticles = await productService.getAll()

  let articlesResu:[
    {
      id: string,
      Name: string,
      Price: number,
      Date: number,
      Size: string,
      Img: string,
      Stuffing: string,
      Type: string,
      Status: string,
      Material: string
    }
  ] = [getArticles[0]]

  for(let i=1; i<articlesCant*page; i++){
    articlesResu.push(getArticles[i])
  }

  return articlesResu
}