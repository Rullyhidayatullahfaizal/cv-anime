"use client"

import React, { useState } from "react"

const CollectionButton = ({anime_mal_id,user_email}) =>{

    const [isCreated,setIsCreated] = useState(false)

    const handleCollection = async(event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if(collection.isCreated){
            setIsCreated(true)
        }
        
    }
    return(
        <>
        {
            isCreated
            ?
            <p className ="font-semibold text-red-500">data berhasil ditambahkan</p>
            :   
            <button onClick={handleCollection} className="bg-violet-500 py-2 px-3 font-semibold hover:bg-slate-800 hover:text-white rounded my-3">add to collection</button>
        }
        </>
    )
}

export default CollectionButton