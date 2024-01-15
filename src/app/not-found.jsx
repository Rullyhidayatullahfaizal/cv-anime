"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

 const Page = () => {
    const router = useRouter()
    return(
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4">
                <FileSearch size={32} className="bg-dark-800"></FileSearch>
                <h3 className="text-dark-800 text-4xl font-bold">NOT FOUND --{'>'}</h3>
                <button onClick={() => router.back()} className="text-white text-2xl  hover:text-red-500 transition-all px-5 py-2 rounded no-underline">Kembali</button>
            </div>
        </div>
    )
 }

 export default Page