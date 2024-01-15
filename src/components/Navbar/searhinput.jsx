"use client"
import { useRef } from "react";
import "./input.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";


const Searchinput = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handlesearch = (event) =>{
        event.preventDefault()
        const keyword = searchRef.current.value.trim()

        if(keyword){
        router.push(`/search/${keyword}`)
      }
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          handlesearch(event)
        }
    }    

    return(
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            ref={searchRef}
            required=""
            onKeyDown={handleKeyPress} // Menangani kejadian ketika tombol ditekan            
          />
           <button className="absolute top-6 end-2  rounded" onClick={handlesearch} >
              <MagnifyingGlass size={28} />
            </button>
          <label htmlFor="name" className="form__label">
            Search..
          </label>
        </div>
    )
}

export default Searchinput