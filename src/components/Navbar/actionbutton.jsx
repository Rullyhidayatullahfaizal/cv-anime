import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"

const ActionButton = async() => {
    const user = await authUserSession()
    const actionLabel = user? "sign_out": "sign in"
    const actionURL = user? "api/auth/signout":"/api/auth/signin" 


    return(
        <div className=" flex gap-2">
            {user ? <Link href="/users/dashboard">Dashbord</Link> : null}
            
            <Link href={actionURL}>{actionLabel}</Link>
        </div>
    )
}

export default ActionButton