import AbilitiesArea from './components/AbilitiesArea';
import MainLayout from './layout/MainLayout';
import Ability from './models/AbilitiesModel';

const AbilitiesArray: Ability[] = [
  {name: "JavaScript"}, {name: "HTML"}, {name: "CSS"}, {name: "TypeScript"}, {name: "Figma"}, {name: "AGILE"}, {name:"OOP"}, {name: "React"}, {name: "Material UI"}, {name: "SOLID"}, 
]

function App() {

  return (
    <>
     <MainLayout/> 
     <AbilitiesArea data={AbilitiesArray}/>
    </>
  )
}

export default App
