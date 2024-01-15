import Image from 'next/image'
import Header from '@/components/animelist/header'
import Animelist from '@/components/animelist/anime-list'
import { getAnimeResponse } from '@/libs/api-libs'


const Search = async ({params}) => {
  const {keyword} = params
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  // const searchAnime = await response.json()
  const searchAnime = await getAnimeResponse("anime",`q=${keyword}`)
  

  return (
   <div>
    <Header title={`Search ${keyword}...`}  />
    <Animelist api={searchAnime}></Animelist>
   </div>
  )
}

export default Search