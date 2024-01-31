import styled from "styled-components";
import NavModal from "./NavModal/NavModal";

interface Props {

  children: JSX.Element | JSX.Element[]
}

const NavWraper = ({children}:Props ) => {
/* Should make two wrappers for nav, one for desktop amd one for mobile instead of just one with two media queries, the function on the media query we apply it throug window.innerWidth*/
  const StyledNavMobile = styled.div`
    display: flex;
    flex-direction: column;
  `

  const StyledNavDesktop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-direction: row;
    height: 40px;
    position: fixed;
    z-index: 1000;
    padding: 10px;
    background-color: rgba(0,0,0, 0.2);
    border-radius: 50px;
    margin-top: 3px;
  `

  return window.innerWidth < 610 
        ? (<StyledNavMobile>
            <NavModal modalId="nav-bar-modal">
              {children}
            </NavModal>
          </StyledNavMobile>)
        : (<StyledNavDesktop> {children} </StyledNavDesktop>)
  
}

export default NavWraper



