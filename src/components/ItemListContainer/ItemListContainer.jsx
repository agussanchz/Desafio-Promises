import React from 'react'
import imagen1 from '../utils/imagenes/random1.jpg'
import imagen2 from '../utils/imagenes/random1.jpg'
import imagen3 from '../utils/imagenes/random1.jpg'
import imagen4 from '../utils/imagenes/random1.jpg'


export default function ItemListContainer() {

    const products = [
        {id: "1", name: "random1", description: "lorem insput", img: {imagen1}},
        {id: "2", name: "random2", description: "lorem insput", img: {imagen2}},
        {id: "3", name: "random3", description: "lorem insput", img: {imagen3}},
        {id: "4", name: "random4", description: "lorem insput", img: {imagen4}}
    ]

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

    console.log(getProd)   


    return (
        <div>ItemListContainer</div>
    )
}
