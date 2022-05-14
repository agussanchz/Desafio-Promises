import React from 'react'
import Item from '../Item/Item'

export default function ItemList({listProducts}) {
  return (
    <div>
      <h3>Lista de Productos</h3>

      {listProducts.map((producto) => <Item producto={producto} key={producto.id}/>)}

    </div>
  )
}
