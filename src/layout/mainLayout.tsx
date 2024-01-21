import styled from "styled-components"
import NavBar from "./navBar"

const StyledMainLayoutWrapper = styled.div`
    text-align: center;
`

const MainLayout = () => {
  
  return (
    <StyledMainLayoutWrapper>
        <NavBar/>   
    </StyledMainLayoutWrapper>
  )
}

export default MainLayout
