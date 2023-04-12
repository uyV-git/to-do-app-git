import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from './SidebarItem';
import { VscAccount } from "react-icons/vsc";

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 90vh;
  background-color: #2f3134;

  &.show-menu {
    position: absolute;
    left: 0px;
    transition: 1s;
    z-index: 10;
  }

  &.hide-menu {
    position: absolute;
    left: -376px;
    transition: 1s;
  }
`

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProfilePhoto = styled.div`
  margin-top: 10px;
  font-size: 3rem;
  color: #fff;
`

const ProfileText = styled.div`
  color: #fff;
  margin-bottom: 10px;

  p {
    text-align: center;

    &.name {
      font-weight: bold;
      font-size: 1.5rem;
    }

    
  }
`


function Sidebar({ isOpen, setMenu }) {
  const menus = [
    { name: 'Home', path: "/" },
    { name: 'All Notes', path: "/allnotes" },
    { name: 'Important', path: '/important' },
    { name: 'Deleted', path: "/deleted" },
    { name: 'Create', path: "/create" }
  ]

  return (
    <Side className={isOpen ? "show-menu" : "hide-menu"}>
      <ProfileContainer>
        <ProfilePhoto>
          <VscAccount />
        </ProfilePhoto>
        <ProfileText>
          <p className="name">Name</p>
          <p className="email">email@emailAddress.com</p>
        </ProfileText>
      </ProfileContainer>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#000' : '#fff',
                backgroundColor: isActive ? '#d9d9d9' : '#2f3134',
                transition: 'all 0.33s',
                textDecoration: "none",
                textAlign: "center",
                fontWeight: 'bold'
              })}
              to={menu.path}
              key={index}>
              <SidebarItem menu={menu} />
            </NavLink>
          )
        })}
      </Menu>
    </Side>

  )
}

export default Sidebar;