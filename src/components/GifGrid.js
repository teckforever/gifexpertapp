import React from 'react'
import { GifFridItem } from './GifFridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category)

    return (
        <>
            <h3> {category}</h3>

            {loading && <p>Cargando..</p>}

            < div className="card-grid" >
                {
                    images.map((img) => (
                        <GifFridItem key={img.id} {...img} />
                    ))
                }
            </div >
        </>
    )
}
