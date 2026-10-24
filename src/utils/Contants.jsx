import { BiCategory, BiSolidCategory } from "react-icons/bi";
import { CiTextAlignJustify } from "react-icons/ci";
import { FaPlaneDeparture, FaRoute } from "react-icons/fa";
import { GiRockingChair } from "react-icons/gi";
import { LuTicket } from "react-icons/lu";
import { RiFolderUserLine, RiListUnordered, RiServiceBellFill } from "react-icons/ri";
import { TbMessageQuestion, TbWorldSearch } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";

export const LISTMENU = [
    {
        title: "Dasboard",
        icon: <BiSolidCategory />,
        path: "/"
    },
    {
       title: "Categories",
       icon: <BiCategory />,
       path: "/categories"
    },
    {
        title: "Planes",
        icon: <FaPlaneDeparture />,
        subMenu: [
            { name: "Airports", path: "/airports" },
            { name: "Aircrafts", path: "/aircrafts" },
            { name: "AirLines", path: "/airLines" }
        ]
    },
      {
        title: "Seats",
        icon: <GiRockingChair  />,
        subMenu: [
            { name: "SeatTypes", path: "/seat_types" },
            { name: "Chairs", path: "/chairs" },
        ]
    },
    {
        title: "Services",
        icon: <RiServiceBellFill />,
        subMenu: [
            { name: "Services_Airlines", path: "/services_airlines" },
            { name: "Service_Details", path: "/services_details" }
        ]
    }, 
    {
        title : "Orders", 
        icon: <RiListUnordered />,
        subMenu: [
            {name : "Flights", path : "/flights"},
            {name : "Bookings", path : "/bookings"},
            {name : "Customer_Infos", path : "/customer_infos"}
        ]
    },
    {
        title: "Use Page",
        icon: <RiFolderUserLine />,
        path: "/"
    }
];
//Đổ cái navbar mới vào đây client
export const LISTHOME = [
    {
        title: "Khám Phá",
        icon: <TbWorldSearch />,
        path: "/"
    },
    {
       title: "Mua vé",
       icon: <LuTicket />,
       path: "/categories"
    },
    {
        title: "Dịch vụ bổ trợ",
        icon: <TiMessages />,
    },
      {
        title: "Hành trình",
        icon: <FaRoute />,
    },
    {
        title: "Trải nghiệm bay",
        icon: <CiTextAlignJustify/>,
    }, 
    {
        title : "Trợ giúp", 
        icon: <TbMessageQuestion />,
    },
];


export const upload_preset = "VIET123";
export const cloud_name = "danhe48za";

// Constants for roles
export const ROLES = {
  ADMIN: 'admin',        // Quản trị viên cấp cao
  MODERATOR: 'moderator', // Quản trị viên cấp trung (người kiểm duyệt)
  USER: 'user',          // Người dùng thông thường
};