import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Link)`
    background-color: #000000;
    color: #F2F1E4;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    margin: 0 5px;
    cursor: pointer;
    transition: transform 0.3s ease;
    text-decoration: none;
    width: 100px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.1);
    }
`;


interface NavButton {
    text?: string,
    link: string,
    image?: string,
}

const NavButton = ({text, link, image}: NavButton) => {
    
  return (
      <StyledButton to={link} className="navButton">
            {image && <img src="image" alt={text} />} 
            {text && text.toUpperCase()}
      </StyledButton>
  )
}

export default NavButton
