import { NavWraper } from "./assets/NavWraper"
import NavButton from "./components/NavButton"
import styled from "styled-components"

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const NavBar = () => {

  return (
    <StyledNavBar>
        <NavWraper>
            <NavButton text="Home" link="/ruta-a-personaStyledLizar"/>
            <NavButton text="About" link="/ruta-a-personaStyledLizar"/>
            <NavButton text="Proyects" link="/ruta-a-personaStyledLizar"/>
            <NavButton text="Contact" link="/ruta-a-personaStyledLizar"/>
        </NavWraper>
    </StyledNavBar>
  )
}

export default NavBar
