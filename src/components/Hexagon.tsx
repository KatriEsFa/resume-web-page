import styled from 'styled-components';

// Definir la forma hexagonal con vértices redondeados


interface HexagonProps {
  text: string;
  size?: string;
}

const Hexagon = ({ text, size }: HexagonProps) => {
  const HexagonContainer = styled.div`
  width: ${ size ? size : `58px`}; 
  height: ${ size ? size : `58px`}; 
  background-color: black;
  position: relative;
  margin: 3px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: #F2F1E4;
  justify-content: center;
`;


  return (
    <HexagonContainer>
      <p>{text}</p>
    </HexagonContainer>
  );
};



export default Hexagon;
