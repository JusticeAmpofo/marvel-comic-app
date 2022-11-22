import { Link } from 'react-router-dom'

function CharacterItem({ character: { id, name, thumbnail } }) {
    return (
        <li>
            <Link to={`/characters/${id}`}>
                <img src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`} alt={name} className='mx-auto' />
                <p className='text-center'>{name}</p>
            </Link>
        </li>
    )
}
export default CharacterItem