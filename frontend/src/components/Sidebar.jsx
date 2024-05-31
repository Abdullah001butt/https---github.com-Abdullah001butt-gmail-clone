import React from "react";
import { LuPencil } from "react-icons/lu";
import { RiInboxFill } from "react-icons/ri";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { RiSendPlane2Line } from "react-icons/ri";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineExpandMore } from "react-icons/md";

const sidebarItems = [
  {
    icon: <RiInboxFill size={"24px"} />,
    text: "Inbox",
  },
  {
    icon: <MdOutlineStarBorderPurple500 size={"24px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineAccessTime size={"24px"} />,
    text: "Snoozed",
  },
  {
    icon: <RiSendPlane2Line size={"24px"} />,
    text: "Sent",
  },
  {
    icon: <CiFileOn size={"24px"} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineExpandMore size={"24px"} />,
    text: "More",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sidebarItems.map((item, index) => {
          return (
            <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
