import styled from "styled-components"
import NavBar from "./navBar"
import ImageWithTextBanner from '../components/ImageWithTextBanner';
import imageURL from '../assets/no-background.png'


const StyledMainLayoutWrapper = styled.div`
    text-align: center;
`

const MainLayout = () => {
  
  return (
    <StyledMainLayoutWrapper>
        <NavBar/>
        <ImageWithTextBanner imageURL={imageURL} header="Katriel Espino" sub_header="Front-end Developer" />  
    </StyledMainLayoutWrapper>
  )
}

export default MainLayout
