import styled from 'styled-components';
import { HiMenu } from "react-icons/hi";


const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #2f3134;
`

const SidebarIcon = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  color: #fff;
  cursor: pointer;
`

const DateString = styled.div`
  margin-right: 20px;
  color: #fff;
  font-weight: bold;
`

const date = new Date();

function Navbar({ isOpen, setMenu }) {
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  }

  return (
    <NavbarDiv>
      <SidebarIcon><HiMenu onClick={() => toggleMenu()} /></SidebarIcon>
      <DateString>{date.toDateString()}</DateString>
    </NavbarDiv>
  )
}

export default Navbar;