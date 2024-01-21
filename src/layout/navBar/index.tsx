import { NavWraper } from "./assets/NavWraper"
import NavButton from "./components/NavButton"
import LogoImage from "../../assets/no-background.jpg"
import { LogoWraper } from "./assets/LogoWraper"
import styled from "styled-components"

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
`

const NavBar = () => {

  return (
    <StyledNavBar>
        <LogoWraper link={LogoImage} alt="Web Page Logo" />
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
