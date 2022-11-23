import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import CharacterContext from '../context/characters/CharacterContext'
import { getCharacter } from '../context/characters/CharacterActions'
import Loader from '../components/layout/Loader'

function Character() {
    const { character, loading, dispatch } = useContext(CharacterContext)

    const params = useParams()

    useEffect(() => {
        dispatch({ type: 'SET_LOADING' })
        const getCharacterData = async () => {
            const characterData = await getCharacter(params.characterId)
            dispatch({ type: 'GET_CHARACTER', payload: characterData })
        }

        getCharacterData()
    }, [dispatch, params.characterId])

    const { description, name, thumbnail } = character

    const handleDescription = () => {
        let copy
        if(description === '' || description === ' ') {
            copy = 'There is no description of this character at this time.'
        } else {
            copy = description
        }

        return copy
    }

    if(!loading) {
        return (
            <div className='flex flex-col md:flex-row'>
                <div className='max-w-sm mx-auto md:ml-0 md:mr-0 md:w-1/4'>
                    <img src={`${thumbnail?.path}/portrait_incredible.${thumbnail?.extension}`} alt={name} className='w-full' />
                </div>
                <div className='mt-5 text-center md:mt-0 md:ml-5 md:text-left md:w-3/4'>
                    <h2 className='text-2xl font-bold mb-5'>{name}</h2>
                    <p>{handleDescription()}</p>
                </div>
            </div>
        )
    } else {
        return <Loader />
    }
    
}
export default Character