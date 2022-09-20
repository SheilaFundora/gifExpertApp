
export const getGifs = async (categories) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=83N0qCPvM4GITCoVnYEza8E9L8UZcw3Y&q=${categories}&limit=8`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    // ya en data tenemos todos los datos que necesitamos, pero de forma muy larga,
    // podemos destructirizarlo

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    })

    return gifs;
}

