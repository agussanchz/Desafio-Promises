import React from 'react'

export default function ItemListContainer() {

    const productos = [
        {id: "1", name: "random", description: "lorem insput"},
        {id: "2", name: "random2", description: "lorem insput"},
        {id: "3", name: "random3", description: "lorem insput"},
        {id: "4", name: "random4", description: "lorem insput"},
    ]

    const traerProd = new Promise ((resolve, reject) => {

        let condition = true
        
        setTimeout(() => {
            if(condition){
                resolve(productos)
            }else{
                reject("Error 404")
            }
        }, 2000)
     
    })
    console.log(traerProd)  

    

    return (
        <div>ItemListContainer</div>
    )
}
