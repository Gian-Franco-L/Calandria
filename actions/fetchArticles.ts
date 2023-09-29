'use server'

import productService from "@/services/product"


export default async function fetchArticles(page: number, search?: string){
  const articlesCant = 10
  

  const getArticles = await productService.getAll()

  if(search){
    if(search === 'Precio<'){
      getArticles.sort((a: any, b: any) => a.Price - b.Price);
    }
    if(search === 'Precio>'){
      getArticles.sort((a: any, b: any) => b.Price - a.Price);
    }
    if(search === 'Tiempo>'){
      getArticles.sort((a: any, b: any) => b.Date - a.Date);
    }
    if(search === 'Tiempo<'){
      getArticles.sort((a: any, b: any) => a.Date - b.Date);
    }
  }


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