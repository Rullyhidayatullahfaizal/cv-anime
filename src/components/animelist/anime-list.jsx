import Link from "next/link";
import "./style.css";
import Image from "next/image";

const Animelist = ({ api }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-4 my-2 mx-2 lg:ml-10  ">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer"
            key={index}
          >
            <div className="card">
              <Image
                src={anime.images.webp.image_url}
                alt="...."
                width={600}
                height={800}
                className="w-full max-h-64 object-cover"
              />
              <div className="card__content ">
                <p className="card__title">{anime.title}</p>
                <div className="flex flex-col item-center mt-3 font-semibold">
                  {anime.rank && <p>{`rank  : ${anime.rank}`}</p>}
                  {anime.score && <p style={{}}>{`score : ${anime.score}`}</p>}
                  {!anime.score && !anime.rank && (
                    <p className="flex  items-center justify-center font-bold bg-black text-white rounded">klik cardnya.</p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Animelist;
