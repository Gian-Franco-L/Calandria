'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import PurchaseFormStyles from "@/styles/PurchaseForm/PurchaseForm.module.css"
import ItemsOnCart from "./itemsOnCart/ItemsOnCart";
import productService from "@/services/product"
import { v4 as uuidv4 } from "uuid"
import ProvinceFilter from "@/components/ProvinceFilter/ProvinceFilter"

export default function PurchaseForm(){

  const [allArticles, setAllArticles] = useState<any[]>([]);
  const [otherPerson, setOtherPerson] = useState("no")
  const otherPersonStatus = otherPerson === "yes" ? "apearPerson" : "desapearPerson"

  useEffect(() =>{
    productService.getAll()
      .then((res) => {
        let articlesAux = []
        for(let i=0; i<3; i++){
          articlesAux.push(res[i])
        }
        setAllArticles(articlesAux)
      })
  }, [])

  return(
    <div className={PurchaseFormStyles.mainContainer}>
      <section className={PurchaseFormStyles.articlesTotal}>
        <article className={PurchaseFormStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Checkout</p>
        </article>
        <article style={{minHeight: '250px'}}>
          {
            allArticles.map(item =>{
              return <ItemsOnCart 
                      item={item}
                      key={uuidv4()}
                    />
            })
          }
        </article>
        <div style={{
          width: '100%',
          border: '1px solid #3b151f',
          marginTop: '5%',
          marginBottom: '5%'
        }}></div>
        <article>
          <div className={PurchaseFormStyles.flexBetween}>
            <p>Subtotal</p>
            <p>$00.000,00</p>
          </div>
          <div className={PurchaseFormStyles.flexBetween}>
            <p>Costo de envío</p>
            <p>Gratis/$00.000,00</p>
          </div>
          <div className={PurchaseFormStyles.flexBetween}>
            <p>Total</p>
            <p>$00.000,00</p>
          </div>
        </article>
      </section>
      <section className={PurchaseFormStyles.formInfomation}>
        <form action="">
          <article>
            <h3 style={{marginBottom: '1%'}}>Identificacion del comprador/destinatario</h3>
            <p>Correo</p>
            <label htmlFor="email" />
            <input
              name="email"
              type="email"
              className=""
              id="email"
              required
              style={{width: '100%'}}
            />
            <div className={PurchaseFormStyles.flexBetween}>
              <div style={{width: '47%'}}>
              <p>Nombre</p>
              <label htmlFor="name" />
              <input
                name="name"
                type="text"
                className=""
                id="name"
                required
                style={{width: '100%'}}
              />
              </div>
              <div style={{width: '47%'}}>
                <p>Apellido</p>
                <label htmlFor="lastName" />
                <input
                  name="lastName"
                  type="text"
                  className=""
                  id="lastName"
                  required
                  style={{width: '100%'}}
                />
              </div>
            </div>
            <div className={PurchaseFormStyles.flexBetween}>
              <div style={{width: '47%'}}>
                <p>DNI</p>
                <label htmlFor="dni" />
                <input
                  name="dni"
                  type="number"
                  className=""
                  id="dni"
                  required
                  style={{width: '100%'}}
                />
              </div>
              <div style={{width: '47%'}}>
                <p>Telefono</p>
                <label htmlFor="phone" />
                <input
                  name="phone"
                  type="tel"
                  className=""
                  id="phone"
                  required
                  style={{width: '100%'}}
                />
              </div>
            </div>
            <div className={PurchaseFormStyles.otherPerson}>
              <label htmlFor="otherPerson" />
              <input
                name="otherPerson"
                type="checkbox"
                className=""
                id="otherPerson"
                required
                style={{ marginRight: '1%' }}
                onClick={() => setOtherPerson(prevState => prevState === "no" ? "yes" : "no")}
              />
              <p>Otra persona va a retirar el pedido.(solo en eleccion retirar)</p>
            </div>
            <div className={`${PurchaseFormStyles[otherPersonStatus]}`}>
              <p style={{marginTop: '2%', fontWeight: 'bold'}}>Quien retirará el pedido?</p>
              <div className={PurchaseFormStyles.flexBetween}>
                <div style={{width: '47%'}}>
                <p>Nombre</p>
                <label htmlFor="name" />
                <input
                  name="name"
                  type="text"
                  className=""
                  id="name"
                  required
                  style={{width: '100%'}}
                />
                </div>
                <div style={{width: '47%'}}>
                  <p>Apellido</p>
                  <label htmlFor="lastName" />
                  <input
                    name="lastName"
                    type="text"
                    className=""
                    id="lastName"
                    required
                    style={{width: '100%'}}
                  />
                </div>
              </div>
            </div>
          </article>
          <article>
            <h3 style={{marginBottom: '1%', marginTop: '10%'}}>Domicilio del comprador/destinatario</h3>
            <p>Calle</p>
            <label htmlFor="street" />
            <input
              name="street"
              type="text"
              className=""
              id="street"
              required
              style={{width: '100%'}}
            />
            <div className={PurchaseFormStyles.flexBetween}>
              <div style={{width: '47%'}}>
                <p>Numero</p>
                <label htmlFor="houseNumber" />
                <input
                  name="houseNumber"
                  type="number"
                  className=""
                  id="houseNumber"
                  required
                  style={{width: '100%'}}
                />
              </div>
              <div style={{width: '47%'}}>
                <p>Departamento(opcional)</p>
                <label htmlFor="department" />
                <input
                  name="department"
                  type="tel"
                  className=""
                  id="department"
                  required
                  style={{width: '100%'}}
                />
              </div>
            </div>
            <p>Barrio(opcional)</p>
            <label htmlFor="neighborhood" />
            <input
              name="neighborhood"
              type="text"
              className=""
              id="neighborhood"
              required
              style={{width: '100%'}}
            />
            <p>Ciudad</p>
            <label htmlFor="city" />
            <input
              name="city"
              type="text"
              className=""
              id="city"
              required
              style={{width: '100%'}}
            />
            <div className={PurchaseFormStyles.flexBetween}>
              <div style={{width: '47%'}}>
              <p>Codigo postal</p>
              <label htmlFor="postal" />
              <input
                name="postal"
                type="text"
                className=""
                id="postal"
                required
                style={{width: '100%'}}
              />
              </div>
              <div style={{width: '47%'}}>
              <p>Provincia</p>
              <ProvinceFilter />
              {/* <select name="provinces" style={{width: '100%'}}>
                <option value="BA">Buenos Aires</option>
                <option value="CF">Capital Federal</option>
                <option value="CA">Catamarca</option>
                <option value="CHA">Chaco</option>
                <option value="CHU">Chubut</option>
                <option value="Co">Córdoba</option>
                <option value="CRS">Corrientes</option>
                <option value="ER">Entre Ríos</option>
                <option value="F">Formosa</option>
                <option value="J">Jujuy</option>
                <option value="LP">La Pampa</option>
                <option value="LR">La Rioja</option>
                <option value="ME">Mendoza</option>
                <option value="MI">Misiones</option>
                <option value="N">Neuquén</option>
                <option value="RN">Río Negro</option>
                <option value="S">Salta</option>
                <option value="SJ">San Juan</option>
                <option value="SL">San Luis</option>
                <option value="SC">Santa Cruz</option>
                <option value="SF">Santa Fe</option>
                <option value="SDE">Santiago del Estero</option>
                <option value="TDF">Tierra del Fuego</option>
                <option value="T">Tucumán</option>
              </select> */}
              </div>
            </div>
          </article>
        </form>
      </section>
    </div>
  )
}