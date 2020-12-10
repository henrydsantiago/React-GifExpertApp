import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid'


const GifExpertApp = ()=>{

/*     const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; */

    const [categories, setCategories] = useState([])

 /*    const handleAdd = (nuevaSerie)=>{
        setCategories(()=> [...categories, nuevaSerie])
    } */



    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <div>
                {
                    categories.map(category => {
                        return (
                            <GifGrid 
                                key={category} 
                                category={category}
                            />
                        )
                        
                    })
                }
            </div>
            <GifGrid/>
            
        </>
    )
}

export default GifExpertApp;
