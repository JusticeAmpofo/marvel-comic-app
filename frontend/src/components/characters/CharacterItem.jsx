function CharacterItem({ character: { name, thumbnail } }) {
    return (
        <li>
            <img src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`} alt={name} className='mx-auto' />
            <p className='text-center'>{name}</p>
        </li>
    )
}
export default CharacterItem