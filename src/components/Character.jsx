import PropTypes from 'prop-types'

export const Character = ({
  character: { id ,name, image, country, abilities }
}) => {
  return (
    <ul key={id}>
      <div>
      <h2>{name}</h2>
      <p>{country}</p>
    <div>
        <img src={image} alt="" width={300} height={400} /> 
          {abilities.map(({ ability_name, ability_icon, ability_description }) => {
            return (
              
              <li >
                <span >{ability_name}</span>
                <img src={ability_icon} alt="icon" width={30} height={30}/>

                <span>{ability_description}</span>
              </li>
            )
          }
        )}
         
      </div>
      </div>
       </ul>
  )
}


Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
}

