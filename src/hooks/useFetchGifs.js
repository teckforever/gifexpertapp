
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    //STATE HOOK USEFETCHGIFS
    const [state, setstate] = useState({ data: [], loading: true })

    /* PARA QUE SOLO SE EJECUTE UNA VEZ */
    useEffect(() => {

        getGifs(category).then(imgs => {

            setTimeout(() => {
                setstate(
                    {
                        data: imgs,
                        loading: false
                    }
                )

            }, 500);

        })

    }, [category])


    return state

}
