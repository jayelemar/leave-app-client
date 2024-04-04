
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const UserSelectRole = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Change Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="manager">Sub Admin</SelectItem>
        <SelectItem value="employee">Staff</SelectItem>
      </SelectContent>
    </Select>

  )
}

export default UserSelectRole