import Link from "next/link";

const Header = ({ title, linkhref, linktittle }) => {
    // Decode URI component
  const decodedTitle = decodeURI(title);

  return (
    <div className="flex justify-between items-center mx-10 my-4">
      <h1 className="font-extrabold text-transparent md:text-2xl text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {decodedTitle}
      </h1>
      {linkhref && linktittle ? (
        <Link
          href={linkhref}
          className="md:text-xl text-md underline hover:text-indigo-500 transition-all"
        >
          {linktittle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
