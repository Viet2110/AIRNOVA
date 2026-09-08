import { BiCategory, BiSolidCategory } from "react-icons/bi";
import { FaCity, FaPlaneDeparture } from "react-icons/fa";
import { GiRockingChair } from "react-icons/gi";
import { RiFolderUserLine, RiListUnordered, RiServiceBellFill } from "react-icons/ri";

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
]

export const upload_preset = "VIET123";
export const cloud_name = "danhe48za";

