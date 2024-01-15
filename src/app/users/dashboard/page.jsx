
import Image from "next/image";
import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";


const Page = async() => {
// const router = useRouter();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const checkUserSession = async () => {
//       try {
//         const userData = await authUserSession();
//         setUser(userData);
//       } catch (error) {
//         console.error('Error checking user session:', error);
//         // Jika user belum login, arahkan ke halaman login atau tampilkan pesan
//         router.push('/api/auth/signin'); // Ganti dengan path yang sesuai
//       }
//     };

//     checkUserSession();
//   }, [router]);

//   if (!user) {
//     // Jika user belum login, bisa arahkan ke halaman login atau tampilkan pesan
//     return <div>You are not logged in. Please log in to access this page.</div>;
//   }

const user = await authUserSession()

    return(
      <section>
        <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
            <Image src={user?.image} alt="..." width={250} height={250}/>
            <div className="flex flex-wrap gap-4 py-8">
                <Link 
                    href="/users/dashboard/collection"
                    className="bg-slate-700 rounded  text-white font-bold px-4 py-3 text-xl"
                >
                    My Collection
                </Link>
                <Link 
                    href="/users/dashboard/comment"
                    className="bg-slate-700 rounded text-white font-bold px-4 py-3 text-xl"
                >
                    My Comment
                </Link>
            </div>
        </div>
      </section> 
    )
}


export default Page