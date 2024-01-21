
import { NavWraper } from "./assets/NavWraper"
import NavButton from "./components/NavButton"
import LogoImage from "../../assets/no-background.png"
import { LogoWraper } from "./assets/LogoWraper"

const NavBar = () => {


  return (
    <div className="navbar--father">
        <NavWraper>
            <LogoWraper link={LogoImage} alt="Web Page Logo" />
            <NavButton text="Home" link="/ruta-a-personaStyledLizar"/>
            <NavButton text="About" link="/ruta-a-personaStyledLizar"/>
            <NavButton text="Proyects" link="/ruta-a-personaStyledLizar"/>
            <NavButton text="Contact" link="/ruta-a-personaStyledLizar"/>
        </NavWraper>
    </div>
  )
}

export default NavBar
