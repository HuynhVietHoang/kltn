import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

export default function SideBar() {
  return (
    <Sidebar>
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  )
}