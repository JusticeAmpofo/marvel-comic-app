import { useState, useContext } from 'react'
import CharacterContext  from '../../context/characters/CharacterContext'
import { searchCharacters } from '../../context/characters/CharacterActions'

function CharacterSearch() {
    const [text, setText] = useState('')

    const { dispatch } = useContext(CharacterContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(text.trim() === '') {
            alert('Please enter something')
        } else {
            dispatch({ type: 'SET_LOADING' })
            try {
                const characters = await searchCharacters(text)
                dispatch({ type: 'SEARCH_CHARACTERS', payload: characters })
            } catch (error) {
                dispatch({ type: 'ERROR_FOUND' })
            }
        }
    }

    return (
        <div className='mb-12'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <input
                            type='text'
                            className='bg-ocean-blue mb-4 p-2 w-full'
                            placeholder='Search Character'
                            value={text}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <button type='submit' className='bg-iris hover:bg-medium-slate-blue py-2 rounded-full w-full'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CharacterSearch