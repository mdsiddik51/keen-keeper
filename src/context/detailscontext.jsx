import { useState } from "react";
import { DetailsContext } from "./contextfile";

const DetailsContextProvider = ({ children }) => {
  const [checkin, setcheckin] = useState([]);

  const addCheckin = (item) => {
    setcheckin((prev) => [...prev, item]);
  };

  return (
    <DetailsContext.Provider value={{ checkin, setcheckin, addCheckin }}>
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsContextProvider;