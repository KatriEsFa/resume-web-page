import Hexagon from './Hexagon'
import Ability from '../models/AbilitiesModel'
import styled from 'styled-components';




const HexagonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3px; /* Ajustado para el espacio entre hexágonos */
`;

interface Props {
  data: Ability[]
}

const AbilitiesArea = ({data} : Props) => {
  // Calcula la posición de cada hexágono en función de su índice
  const calculatePosition = (index : number) => {
    const col = index % 4; // Puedes ajustar el número de columnas según tus necesidades
    const row = Math.floor(index / 4); // Puedes ajustar el número de columnas según tus necesidades
    const x = col * 119 + (row % 2 === 1 ? 60 : 0); // 120 es el ancho del hexágono, ajusta según tus necesidades
    const y = row * 90; // 140 es la altura del hexágono, ajusta según tus necesidades
    return { x, y };
  };

  return (
    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: ''}}>
      <h3>HABILIDADES</h3>
      <div style={{ position: 'relative' }}>
        {data.map((data, index) => {
          const position = calculatePosition(index);
          return (
            <HexagonsContainer
              key={index}
              style={{
                position: 'absolute',
                top: position.y,
                left: position.x,
              }}
            >
              <Hexagon text={data.name} size='100px' />
            </HexagonsContainer>
          );
        })}
      </div>
    </div>
  );
};

export default AbilitiesArea;