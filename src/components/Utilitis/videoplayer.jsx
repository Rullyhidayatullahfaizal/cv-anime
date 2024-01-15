"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({YouTubeid}) => {

    const [isOpen,setIsOpen] =useState(true)

    const handleVideoButton = () =>{
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width :"350",
        height:"350"
    }

    const Player = () =>{
        return(
            <div className="fixed bottom-2 right-2">
            <button onClick={handleVideoButton} className="float-rigth bg-white px-3 mb-1 rounded">
            x
            </button>
            <YouTube
                videoId={YouTubeid}
                onReady={(event) => {
                    event.target.pauseVideo()
                }}
                opts={option}
                onError={() => alert("video is broken please try another")}
            
            />
        </div>
        )
    }

    const ButtonOpenTrailer = () =>{
        return(
            <button onClick={handleVideoButton} className="rounded fixed bottom-5 right-5 w-32 bg-white text-xl hover:bg-indigo-500 transition-all shadow-xl ">
                Tonton Trailer
            </button>
        )
    }
   return isOpen ? <Player/> : <ButtonOpenTrailer></ButtonOpenTrailer>
}

export default VideoPlayer