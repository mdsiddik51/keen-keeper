import { Link } from "react-router";

const Card = ({ item }) => {
  return (
    <div>
      <Link
        to={`/details/${item.id}`}
        className="grid place-items-center text-center rounded-md shadow-lg hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]  bg-[#FFFFFF] p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#9514FA]"
      >
        <div className="pb-3 p-2 ">
          <img src={item.picture} className="rounded-full h-20 w-20" alt="" />
        </div>
        <h2 className="text-[#1F2937] font-semibold text-2xl pb-2 ">
          {item.name}
        </h2>
        <p className="text-[#64748B] text-[12px]">
          {item.days_since_contact}d ago
        </p>
        <div className="pt-2 pb-2 flex gap-3">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#CBFADB] rounded-full px-4 py-1 text-[#244D3F]"
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className={` rounded-full px-4 py-1 text-white  ${
            item.status === "overdue"
              ? " bg-[#EF4444] "
              : item.status === "on-track"
                ? "bg-[#244D3F] "
                : " bg-[#EFAD44] "
          }
                  `}
        >
          {item.status}
        </span>
      </Link>
    </div>
  );
};

export default Card;
