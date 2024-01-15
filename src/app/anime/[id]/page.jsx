const { getAnimeResponse } = require("@/libs/api-libs");
import VideoPlayer from "@/components/Utilitis/videoplayer";
import CollectionButton from "@/components/animelist/collectionbutton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";

const Detail = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.user_email, anime_mal_id: id },
  });
  console.log(collection)
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-black font-bold ">
          {anime.data.title} {anime.data.year}
        </h3>
        {
          !collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} />
        }
      </div>
      <div className="pt-4 px-4 flex gap-2 text-black overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-black p-2 bg-violet-500 font-bold">
          <h3>Peringkat</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-black p-2  bg-violet-500 font-bold">
          <h3>Skor</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-black p-2 bg-violet-500 font-bold">
          <h3>Popularity</h3>
          <p>{anime.data.popularity}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-black p-2 bg-violet-500 font-bold">
          <h3>Episodes</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-black p-2 bg-violet-500 font-bold">
          <h3>Status</h3>
          <p>{anime.data.status}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-black">
        <Image
          src={anime.data.images.webp.image_url}
          alt="...."
          width={450}
          height={450}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer YouTubeid={anime.data.trailer.youtube_id}></VideoPlayer>
      </div>
    </>
  );
};

export default Detail;
