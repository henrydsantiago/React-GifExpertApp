import { useState, useEffect } from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState(
        {
            data: [],
            loading: true
        }
    )

   
        useEffect(()=>{
            setTimeout(()=>{

                getGifs(category)
                .then((imgs)=>setImages({
                    data: imgs,
                    loading: false
                }) );
                
            }, 1000)
        },[category])  



    return images;
}
