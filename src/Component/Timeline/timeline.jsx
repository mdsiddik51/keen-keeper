import { useContext, useState } from "react";
import { DetailsContext } from "../../context/contextfile";

const Timeline = () => {
  const context = useContext(DetailsContext);
  const { checkin } = context;

  const [filter, setFilter] = useState("All");

  const filteredCheckins =
    filter === "All" ? checkin : checkin.filter((item) => item.type === filter);

  return (
    <div className="pt-20">
      <div className="w-11/12 mx-auto bg-[#FFFFFF]">
        <h2 className="font-bold text-5xl pb-4">Timeline</h2>

        <div>
          <select
            className="select select-bordered w-full outline-none max-w-xs "
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="All" className="hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]  bg-[#FFFFFF] p-2 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#9514FA]">All</option>
            <option value="Call" className="hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]  bg-[#FFFFFF] p-2 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#9514FA]">Call</option>
            <option value="Text" className="hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]  bg-[#FFFFFF] p-2 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#9514FA]">Text</option>
            <option value="Video" className="hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]  bg-[#FFFFFF] p-2 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#9514FA]">Video</option>
          </select>
        </div>

        <div className="pt-4">
          <div className="grid gap-4 pb-5">
            {filteredCheckins.length === 0 ? (
              <div className="p-4">
                <p className="font-bold text-center text-2xl p-6 bg-red-500 rounded-md shadow-sm">
                  No check-in found for {filter}
                </p>
              </div>
            ) : (
              filteredCheckins.map((item, index) => (
                <div key={index}>
                  {item.type === "Call" ? (
                    <div className="bg-[#F8FAFC] shadow-sm p-2 flex gap-3 items-center rounded-md hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#9514FA]">
                      <img src="./assets/call.png" alt="" />
                      <div>
                        <h1 className="font-medium text-[20px] text-[#244D3F]">
                          {item.type}{" "}
                          <span className="text-[#64748B] text-[18px]">
                            {item.friendName}
                          </span>
                        </h1>
                        <p className="text-[#64748B]">{item.time}</p>
                      </div>
                    </div>
                  ) : item.type === "Text" ? (
                    <div className="bg-[#F8FAFC] shadow-sm p-2 flex gap-3 items-center rounded-md hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#9514FA]">
                      <img src="./assets/text.png" alt="" />
                      <div>
                        <h1 className="font-medium text-[20px] text-[#244D3F]">
                          {item.type}{" "}
                          <span className="text-[#64748B] text-[18px]">
                            {item.friendName}
                          </span>
                        </h1>
                        <p className="text-[#64748B]">{item.time}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#F8FAFC] shadow-sm p-2 flex gap-3 items-center rounded-md hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]   transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#9514FA]">
                      <img src="./assets/video.png" alt="" />
                      <div>
                        <h1 className="font-medium text-[20px] text-[#244D3F]">
                          {item.type}{" "}
                          <span className="text-[#64748B] text-[18px]">
                            {item.friendName}
                          </span>
                        </h1>
                        <p className="text-[#64748B]">{item.time}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
