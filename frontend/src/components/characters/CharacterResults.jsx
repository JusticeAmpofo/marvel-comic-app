import { useContext } from 'react'
import Loader from '../layout/Loader'
import CharacterContext from '../../context/characters/CharacterContext'
import CharacterItem from './CharacterItem'

function CharacterResults() {
    const { characters, firstRequestMade, isError, loading } = useContext(CharacterContext)

    if(!loading && !firstRequestMade && !isError) {
        return (
            <></>
        )
    } else if(!loading && firstRequestMade && !isError) {
        return (
            <>
                {characters.length === 0 ? (
                    <h2 className='text-center text-2xl'>No results found</h2>
                ) : (
                    <ul className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mb-12'>
                        {characters.map((character) => (
                            <CharacterItem key={character.id} character={character} />
                        ))}
                    </ul>
                )}
            </>
        )
    } else if(isError) {
        return (
            <>
                <p className='text-center'>Something went wrong. Please try again.</p>
            </>
        )
    } else {
        return <Loader />
    }
}
export default CharacterResults