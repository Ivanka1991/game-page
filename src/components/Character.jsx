import PropTypes from 'prop-types'


export const Character = ({
  character: { name, image, country, abilities }
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{ country}</p>
    <div>
        <img src={image} alt="" width={500} height={700} /> 
        {/* {abilities} */}
      </div>
      </div>
  )
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
}