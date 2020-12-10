export const getGifs = async (category="saul")=>{
 
    const apikey = 'uNJ7kmUimjijmBlTelVe07tRz7yEonUx'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=10&offset=0&rating=g&lang=en`

    const respuesta =  await fetch(url)
    const { data } = await respuesta.json()
    const gifs = data.map((img)=>{
        return {
            url: img.images?.downsized_medium.url,
            id: img.id,
            titulo: img.title
        }
    })

  
    return gifs;

}
 