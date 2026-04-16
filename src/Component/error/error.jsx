import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";


const Error = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-100 px-4">
      <div className="text-center grid place-items-center">
        <h1 className="text-red-600 text-7xl "><BiError /></h1>
        <h1 className=" text-4xl md:text-7xl font-bold  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">404</h1>
        <h2 className=" text-2xl md:text-3xl font-semibold pt-3  ">
          Oops, This Page Not Found!
        </h2>
        <p className=" text-xl md:text-2xl text-black/30 font-semibold mt-2">
          The link might be corrupted
        </p>
        <p className="font-semibold text-[12px] md:text-xl text-black">
            or the page may have been romoved
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-lg ease-in-out hover:scale-110 hover:opacity-90 transition duration-300   hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;