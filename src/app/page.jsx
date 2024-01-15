
import Header from '@/components/animelist/header'
import Animelist from '../components/animelist/anime-list'
import { getAnimeResponse, getNestedAnimeResponse,reproduce } from '../libs/api-libs'
import Page from './not-found'

const Home = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=21`)
  // const anime = await response.json()
  const topAnime = await getAnimeResponse("top/anime","limit=24")
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  recomendedAnime =reproduce(recomendedAnime,8)
  // console.log(recomendedAnime)



  return (
   <div>
    <section>
    <Header title="paling populer" linkhref="/populer" linktittle="Lihat semua" />
    <Animelist api={topAnime}></Animelist>
    </section>
    <section>
    <Header title="recomended" linkhref="/populer" />
    <Animelist api={recomendedAnime} ></Animelist>
    </section>
   </div>

   
  )
}
 
export default Home 



// {anime.data.map(data => {
//   return (
//     <div key={data.mal_id} className='shadow-sm'>
//     <Uji title={data.title} images={data.images.webp.image_url} id={data.mal_id}></Uji>
//     </div>
//   )
// })}