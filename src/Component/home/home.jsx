import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import Card from "../card/card";
import { ScaleLoader } from "react-spinners";
import useFriends from "../../hooks/hook";

const Home = () => {
  const {friends , loding} = useFriends();

  //   data filter code
  const onTrack = friends.filter((item) => item.status === "on-track");
  const Attention = friends.filter(
    (item) => item.status === "overdue" || item.status === "almost due",
  );
  const ThisMonth = friends.filter(
    (item) => item.days_since_contact <= 30,
  );



  return (
    <div>
      {loding ? (
        <div className="flex justify-center items-center min-h-screen">
          <ScaleLoader />
        </div>
      ) : (
        <div className="bg-[#F8FAFC]">
          <div className="w-11/12 mx-auto pb-15">
            <div className="grid place-items-center text-center pt-6 md:pt-20">
              <h1 className="text-[#1F2937] font-bold text-3xl">
                Friends to keep close in your life
              </h1>
              <p className="text-[#64748B] pt-4 pb-8">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the relationships that matter most.
              </p>
              <button className="flex items-center gap-2 bg-[#244D3F] py-2 px-3 rounded-sm text-white">
                <IoAdd />
                Add a Friend
              </button>
            </div>
            <div className="md:pt-10 pt-5 grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 ">
              <div className="bg-[#FFFFFF] p-4 rounded-md shadow-lg place-items-center">
                <h2 className="pt-4 font-semibold text-4xl">
                  {friends.length}
                </h2>
                <p className="pt-2 text-[#64748B] text-lg">Total Friends</p>
              </div>
              <div className="bg-[#FFFFFF] p-4 rounded-md shadow-lg place-items-center">
                <h2 className="pt-4 font-semibold text-4xl">
                  {onTrack.length}
                </h2>
                <p className="pt-2 text-[#64748B] text-lg">On Track</p>
              </div>
              <div className="bg-[#FFFFFF] p-4 rounded-md shadow-lg place-items-center">
                <h2 className="pt-4 font-semibold text-4xl">
                  {Attention.length}
                </h2>
                <p className="pt-2 text-[#64748B] text-lg">Need Attention</p>
              </div>
              <div className="bg-[#FFFFFF] p-4 rounded-md shadow-lg place-items-center text-center">
                <h2 className="pt-4 font-semibold text-4xl">{ThisMonth.length}</h2>
                <p className="pt-2 text-[#64748B] text-lg">
                  Interactions This Month
                </p>
              </div>
            </div>
            <hr className="text-[#E9E9E9] pb-8" />
            <section>
              <h1 className="text-[#1F2937] font-semibold text-2xl p-1">
                Your Friends
              </h1>
              <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {friends.map((item) => {
                  return <Card key={item.id} item={item} />;
                })}
              </div>
            </section>
          </div>
        </div>
      )}
      `
    </div>
  );
};

export default Home;
