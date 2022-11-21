import { useContext } from 'react'
import Loader from '../layout/Loader'
import CharacterContext from '../../context/characters/CharacterContext'
import CharacterItem from './CharacterItem'

function CharacterResults() {
    const { characters, loading } = useContext(CharacterContext)

    if(!loading) {
        return (
            <ul className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mb-12'>
                {characters.map((character) => (
                    <CharacterItem key={character.id} character={character} />
                ))}
            </ul>
        )
    } else {
        return <Loader />
    }
}
export default CharacterResults