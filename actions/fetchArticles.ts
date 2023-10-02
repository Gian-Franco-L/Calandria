'use server'

import productService from "@/services/product"


export default async function fetchArticles(page: number, search?: string | null, filter?: string | null){
  const articlesCant = 10

  let getArticles = await productService.getAll()

  if(search === null) search = 'Precio<'

  if(search){
    if(search === 'Precio<'){
      getArticles = getArticles.sort((a: any, b: any) => a.Price - b.Price);
    }
    if(search === 'Precio>'){
      getArticles = getArticles.sort((a: any, b: any) => b.Price - a.Price);
    }
    if(search === 'Tiempo>'){
      getArticles = getArticles.sort((a: any, b: any) => b.Date - a.Date);
    }
    if(search === 'Tiempo<'){
      getArticles = getArticles.sort((a: any, b: any) => a.Date - b.Date);
    }
  }

  if(filter){
    if(filter === 'Hogar'){
      getArticles = getArticles.filter((item: any) => item.Type === 'hogar');
    }
    if(filter === 'Niños'){
      getArticles = getArticles.filter((item: any) => item.Type === 'niños');
    }
    if(filter === 'Hogar|Niños'){
      getArticles = getArticles.filter((item: any) => item);
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