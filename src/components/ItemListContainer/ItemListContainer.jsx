import React, { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import imagen1 from "../utils/imagenes/random1.jpg"
import imagen2 from "../utils/imagenes/random2.jpg"
import imagen3 from "../utils/imagenes/random3.jpg"
import imagen4 from "../utils/imagenes/random4.jpg"

export default function ItemListContainer({greeting}) {
    
    //Creacion del state
    const [listProducts, setListProducts] = React.useState([])

    //Productos
    const products = [
        {id: "1", name: "random1", description: "lorem insput", img: imagen1, price: "$152"},
        {id: "2", name: "random2", description: "lorem insput", img: imagen2, price: "$723"},
        {id: "3", name: "random3", description: "lorem insput", img: imagen3, price: "$644"},
        {id: "4", name: "random4", description: "lorem insput", img: imagen4, price: "$105"}
    ]

    //Promises
    const getProd = new Promise ((resolve, reject) => { 
        let condition = true
        setTimeout(() => {
            if(condition){
                resolve(products)
            }else{
                reject("Error 404")
            }
        }, 2000)
    })

    //Implementando usEffect para guardar la lista de productos en la funcion set del state
    useEffect(()=> {
        getProd
        .then((response) => setListProducts(response))
        .catch((error) => console.log("Error:", error))
    }, [])
   
 

    return (
        <div className='container'>
            <h1>{greeting}</h1>
            <ItemList listProducts = {listProducts}/>         
        </div>
    )
}
