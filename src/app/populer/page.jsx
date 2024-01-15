"use client"

import HeaderMenu from "@/components/Utilitis/headermenu"
import Pagination from "@/components/Utilitis/pagination"
import Animelist from "@/components/animelist/anime-list"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "../../libs/api-libs"

const populer = () =>{

    const [page,setPage] = useState(1)
    const [topAnime,setTopAnime] = useState([])


    const fetchData = async() =>{
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        const data = await getAnimeResponse("top/anime",`page=${page}`)
        setTopAnime(data)
    }
    
    useEffect(() =>{
        fetchData()
    },[page])

    return(
    <div>
        <HeaderMenu title="Paling Populer"></HeaderMenu>
        <Animelist api={topAnime}></Animelist>
        <Pagination page = {page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}></Pagination>    
    </div>
    )
}

export default populer