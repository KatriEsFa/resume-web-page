import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Link)`
    background-color: #000000;
    color: #F2F1E4;
    font-size: 16px;
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s ease;
    text-decoration: none;
    width: 300px;
    height: 41px;
    align-content: center;


    &:hover {
        transform: scale(1.1);
    }
`;

interface NavButton {
    text: string,
    link: string,
    image?: string,
}

const NavButton = ({text, link, image}: NavButton) => {
  return (
    <>
      <StyledButton to={link}>
            {image && <img src="image" alt={text} />} 
            {text.toUpperCase()}
      </StyledButton>
    </>
  )
}

export default NavButton
