import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import { useContext } from "react";
import { DetailsContext } from "../../context/contextfile";

const Status = ({ isAnimationActive = true }) => {
  const context = useContext(DetailsContext);
  const { checkin } = context;

  // velue

  const Text = checkin?.filter((item) => item.type === "Text").length || 0;
  const Call = checkin?.filter((item) => item.type === "Call").length || 0;
  const Video = checkin?.filter((item) => item.type === "Video").length || 0;

  const data = [
    {
      name: "Text",
      value: Text,
      fill: "#7E35E1",
    },
    {
      name: "Call",
      value: Call,
      fill: "#244D3F",
    },
    {
      name: "Video",
      value: Video,
      fill: "#37A163",
    },
  ];

  return (
    <div className="pt-10 pb-10 md:pt-20 md:pb-20 bg-[#F8FAFC]">
      {checkin.length === 0 ? (
        <div className=" text-center shadow-sm bg-red-500 p-4 w-11/12 mx-auto rounded-md ">
          <h2 className="text-black font-bold text-2xl">No Call/Text/Video data yet</h2>
        </div>
      ) : (
        <div className="w-11/12 mx-auto">
          <h1 className="font-bold text-3xl md:text-5xl text-[#1F2937] pb-6">
            Friendship Analytics
          </h1>
          <div className="shadow-sm p-8 bg-[#FFFFFF] ">
            <h2 className="font-medium text-[20px] text-[#244D3F]">
              By Interaction Type
            </h2>
            <div className="grid place-items-center">
              <div
                style={{
                  width: "100%",
                  maxWidth: 500,
                  height: 400,
                  minWidth: 300,
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      dataKey="value"
                      innerRadius="60%"
                      outerRadius="80%"
                      paddingAngle={5}
                      cornerRadius={10}
                      isAnimationActive={isAnimationActive}
                    >
                      {data.map((entry, index) => (
                        <Cell key={index} fill={entry.fill} />
                      ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Status;
