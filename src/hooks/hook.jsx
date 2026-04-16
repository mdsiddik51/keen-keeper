import { useEffect, useState } from "react";

const useFriends = () => {
  const [friends, setfriends] = useState([]);
  const [loding, setloding] = useState(true);

  useEffect(() => {
    const fatchData = async () => {
      const responce = await fetch("/friends.json");
      const data = await responce.json();
      setloding(false);
      setfriends(data);
    };
    fatchData();
  });

  return {friends , loding};
};

export default useFriends;