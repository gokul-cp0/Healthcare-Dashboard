import { TbLayoutDashboardFilled } from "react-icons/tb";
import { HiSwitchVertical } from "react-icons/hi";
import { IoCalendar, IoChatbubbleEllipses, IoSettings } from "react-icons/io5";
import { FaSquarePlus } from "react-icons/fa6";
import { BiSolidChart } from "react-icons/bi";

import { FaPhoneAlt } from "react-icons/fa";

export const GeneralNav = [
    { name: "Dashboard", icon: TbLayoutDashboardFilled },
    { name: "History", icon: HiSwitchVertical },
    { name: "Calendar", icon: IoCalendar },
    { name: "Appointments", icon: FaSquarePlus },
    { name: "Statistics", icon: BiSolidChart },
];

export const ToolsNav = [
    { name: "Chat", icon: IoChatbubbleEllipses },
    { name: "Support", icon: FaPhoneAlt },
    { name: "Setting", icon: IoSettings },
];
