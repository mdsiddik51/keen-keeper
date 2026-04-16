import { useState } from "react";
import { DetailsContext } from "./contextfile";

const DetailsContextProvider = ({ children }) => {
  const [checkin, setcheckin] = useState([]);

  const addCheckin = (item) => {
    setcheckin((prev) => [...prev, item]);
  };

  const data = {
    checkin,
    setcheckin,
    addCheckin,
  };

  return (
    <DetailsContext.Provider value={data}>{children}</DetailsContext.Provider>
  );
};

export default DetailsContextProvider;
