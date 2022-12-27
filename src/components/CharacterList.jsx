import PropTypes from "prop-types"
import { Character } from "./Character"


export const CharacterList = ({ characters }) => {
  return (
    <ul>
      {characters.map(character => (
        <li key={character.id}>
          <Character character={character} />
        </li>
      ))}
    </ul>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}