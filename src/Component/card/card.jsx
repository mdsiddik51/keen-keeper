const Card = ({ item }) => {
  console.log(item);

  //     {
  //     "id": 1,
  //     "name": "Emma Wilson",
  //     "picture": "https://randomuser.me/api/portraits/women/1.jpg",
  //     "email": "emma.w@example.com",
  //     "days_since_contact": 62,
  //     "status": "overdue",
  //     "tags": [
  //         "family"
  //     ],
  //     "bio": "Former colleague, great mentor.",
  //     "goal": 30,
  //     "next_due_date": "2026-02-27",
  //     "preferred_contact": "email"
  // }
  return (
    <div>
      <div className="grid place-items-center text-center rounded-md shadow-lg hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]  bg-[#FFFFFF] p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#9514FA]">
        <div className="pb-3 p-2 ">
          <img src={item.picture} className="rounded-full h-20 w-20" alt="" />
        </div>
        <h2 className="text-[#1F2937] font-semibold text-2xl pb-2 ">
          {item.name}
        </h2>
        <p className="text-[#64748B] text-[12px]">{item.days_since_contact}d ago</p>
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
        <span className={item.status === 'overdue'? "text-white bg-[#EF4444] rounded-full px-4 py-1" : "text-white bg-[#EFAD44] rounded-full px-4 py-1"}>
          {item.status}
        </span>
      </div>
    </div>
  );
};

export default Card;
