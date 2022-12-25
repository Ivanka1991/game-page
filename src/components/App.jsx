import { CharacterList } from "./CharacterList";
import { characters } from "../character.js"
export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#FF4656'
    //   }}
    // >
    // </div>
    <>
      
      <CharacterList characters={characters}/>
    </>
  );
};
