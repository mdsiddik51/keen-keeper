import { useParams } from "react-router-dom";
import useFriends from "../../hooks/hook";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { IoIosArchive } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import { ScaleLoader } from "react-spinners";
import { useContext } from "react";
import { DetailsContext } from "../../context/contextfile";
import { toast } from "react-hot-toast";

const Details = () => {
  // for find the friends details with id
  const { id } = useParams();
  const { friends, loding } = useFriends();
  const data = friends.find((f) => f.id === Number(id));

  // using context for global state control
  const context = useContext(DetailsContext);
  const { addCheckin, checkin } = context;

  // handle button click data
  const handleCheckin = (type) => {
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newEntry = {
      friendId: data.id,
      friendName: data.name,
      type,
      time: date,
    };

    addCheckin(newEntry);
    toast.success(`${type} ${data.name}`);
  };

  // date formate
const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });




  if (loding) {
    return (
      <div className="flex justify-center items-center">
        <ScaleLoader />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center">No data found</div>
    );
  }

  return (
    <div className="w-11/12 mx-auto pt-20 pb-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div>
          <div className="grid place-items-center text-center p-6 shadow-lg bg-[#FFFFFF]">
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src={data.picture}
                alt=""
              />
            </div>

            <div>
              <h2 className="text-[#1F2937] font-semibold text-2xl pt-3 pb-3 ">
                {data.name}
              </h2>
            </div>

            <div className="gap-3 flex flex-col">
              <span
                className={` rounded-full px-4 py-1 text-white  ${
                  data.status === "overdue"
                    ? " bg-[#EF4444] "
                    : data.status === "on-track"
                      ? "bg-[#244D3F] "
                      : " bg-[#EFAD44] "
                }
                  `}
              >
                {data.status}
              </span>

              <div className="flex gap-2 justify-center">
                {data.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#CBFADB]  rounded-full px-4 py-1 text-[#244D3F]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[#64748B] font-medium pt-3">"{data.bio}"</p>

            <p className="text-[#64748B] text-[14px] pt-3">
              Preferred: {data.preferred_contact}
            </p>
          </div>

          <div className="grid gap-4 pt-4">
            <div className="p-4 cursor-pointer shadow-lg text-center border border-[#62738280] rounded-md ">
              <h3 className="text-[#1F2937] font-medium flex items-center justify-center gap-2">
                <RiNotificationSnoozeLine /> Snooze 2 weeks
              </h3>
            </div>

            <div className="p-4 cursor-pointer border border-[#62738280] shadow-lg text-center rounded-md">
              <p className="text-[#1F2937] font-medium flex items-center justify-center gap-2">
                <IoIosArchive />
                Archive
              </p>
            </div>

            <div className="p-4 cursor-pointer border border-[#62738280] shadow-lg text-center rounded-md">
              <p className="text-[#EF4444] font-medium flex items-center justify-center gap-2">
                <RiDeleteBin6Line />
                Delete
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div className="bg-[#FFFFFF] p-4 rounded-md shadow-sm text-center">
              <h2 className="pt-4 font-semibold text-[#244D3F] text-[16px] md:text-2xl">
                {data.days_since_contact}
              </h2>
              <p className="pt-2 text-[#64748B] text-[16px] md:text-lg">
                Days Since Contact
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-4 rounded-md shadow-sm text-center">
              <h2 className="pt-4 font-semibold text-[#244D3F] text-2xl md:text-2xl">
                {data.goal}
              </h2>
              <p className="pt-2 text-[#64748B] text-[16px] md:text-lg">
                Goal (Days)
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-4 rounded-md shadow-sm text-center">
              <h2 className="pt-4 font-semibold text-[#244D3F] text-[16px] md:text-2xl">
                {formatDate(data.next_due_date)}
              </h2>
              <p className="pt-2 text-[#64748B] text-lg">Next Due</p>
            </div>
          </div>

          <div className="pt-4 shadow-sm p-6">
            <div className="flex justify-between bg-[#FFFFFF]">
              <h3 className="font-medium text-[20px] text-[#244D3F]">
                Relationship Goal
              </h3>
              <button className="btn">Edit</button>
            </div>

            <p className="text-[#64748B] text-[18px] ">
              Connect every
              <span className="font-bold text-black">{data.goal} days</span>
            </p>
          </div>

          <div className="pt-4">
            <div className="shadow-sm p-6 rounded-md">
              <h3 className="font-medium text-[#244D3F] pb-6 text-[20px]">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <div
                  onClick={() => handleCheckin("Call")}
                  className="bg-[#F8FAFC]  shadow-sm grid place-items-center border border-[#62738280] p-6 rounded-sm"
                >
                  <h3 className="font-bold text-2xl text-[#1F2937]">
                    <FiPhoneCall />
                  </h3>
                  <h2 className="text-[#1F2937] text-[18px] pt-1">Call</h2>
                </div>

                <div
                  onClick={() => handleCheckin("Text")}
                  className="bg-[#F8FAFC] shadow-sm grid place-items-center border border-[#62738280] p-6 rounded-sm"
                >
                  <h3 className="font-bold text-2xl text-[#1F2937]">
                    <LuMessageSquareMore />
                  </h3>
                  <h2 className="text-[#1F2937] text-[18px] pt-1">Text</h2>
                </div>

                <div
                  onClick={() => handleCheckin("Video")}
                  className="bg-[#F8FAFC] shadow-sm grid place-items-center border border-[#62738280] p-6 rounded-sm"
                >
                  <h3 className="font-bold text-2xl text-[#1F2937]">
                    <IoVideocamOutline />
                  </h3>
                  <h2 className="text-[#1F2937] text-[18px] pt-1">Video</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
