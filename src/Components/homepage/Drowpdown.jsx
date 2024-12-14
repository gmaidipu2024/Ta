import React from 'react'
import { UserIcon } from "@heroicons/react/24/outline";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

function ProfileDropDown() {
  return (
    <div>
      <Dropdown>
              <DropdownTrigger>
                <Button variant="none">
                  {" "}
                  <UserIcon className="text-[#26395C] h-4 w-4" /> Account
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="profile">
                <DropdownItem key="new"> My Profile</DropdownItem>
                <DropdownItem key="copy"> My History</DropdownItem>
                <DropdownItem key="edit"> Sign Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
      
    </div>
  )
}

export default ProfileDropDown
