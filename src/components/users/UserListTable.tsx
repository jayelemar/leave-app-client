import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trash2 } from "lucide-react"

import UserSelectRole from "./UserSelectRole"

const usersList = [
  {
    id: 1,
    name: "Zino",
    email: "example@gmail.com",
    role: "admin"
  },
  {
    id: 2,
    name: "Zino2",
    email: "example2@gmail.com",
    role: "manager"
  },
  {
    id: 3,
    name: "Zino3",
    email: "example3@gmail.com",
    role: "employee"
  },
  
]

export function UserListTable() {
  return (
    <Table>
      {/* <TableCaption></TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">s/n</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Change Role</TableHead>
          <TableHead>Action</TableHead>
          {/* <TableHead className="text-right">Role</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {usersList.map((user, index)=> {
          const { id, name, email, role } = user
          return (
            <TableRow key={index}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{role}</TableCell>
              <TableCell>
                <UserSelectRole/>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-center items-center rounded p-2 h-8 w-8 bg-red-600 text-background cursor-pointer">
                  <Trash2 />
                </div>
              </TableCell>
              {/* <TableCell className="text-right">Subscriber</TableCell> */}
          </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
