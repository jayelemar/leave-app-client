import { UserCheck, UserMinus, UserX, Users } from "lucide-react";

export const usersData = [
  {
    title: "Total Users",
    count: 100,
    bgColor: "bg-purple-600",
    icon: <Users size={25} />,
  },
  {
    title: "Verified Users",
    count: 999,
    bgColor: "bg-green-600",
    icon: <UserCheck size={25} />,
  },
  {
    title: "Unverified Users",
    count: 1,
    bgColor: "bg-blue-600",
    icon: <UserMinus size={25} />,
  },
  {
    title: "Suspended Users",
    count: 888,
    bgColor: "bg-rose-600",
    icon: <UserX size={25} />,
  },
]