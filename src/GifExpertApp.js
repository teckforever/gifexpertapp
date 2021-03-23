import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    /* ESTADO APP CATEGORIA POR DEFECTO*/
    const [categories, setCategories] = useState(['One Punch'])

    return (
        <div>
            <h2>GifExpertApp</h2>

            {/* COMP INPUT */}
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* MAPEO DE CATEGORIAS Y COMP GIFGRID PARA CONTENER EL RESULTADO DE LA BUSQUEDA*/}
            <ol>
                {
                    categories.map(category => {
                        return (
                            <GifGrid key={category} category={category} />
                        )
                    })
                }
            </ol>

        </div>
    )
}




