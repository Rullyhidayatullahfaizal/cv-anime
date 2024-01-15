
export const getAnimeResponse = async(resource,query) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

  

export const getNestedAnimeResponse = async(result,objectProperti) => {
    const response = await getAnimeResponse(result)
    return response.data.flatMap(item => item[objectProperti])
}

export const reproduce = (data,gap) => {
    const dataFirts = (Math.random() * (data.length -gap)+1)
    const dataLast = dataFirts + gap

    const response = {
        data:data.slice(dataFirts,dataLast)
    }

    return response
}

