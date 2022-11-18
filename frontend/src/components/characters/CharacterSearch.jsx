import { useState } from 'react'

function CharacterSearch() {
    const [text, setText] = useState('')

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === '') {
            alert('Please enter something')
        } else {
            console.log('data submitted ' + text)
        }
    }

    return (
        <div>
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
                        <button type='submit' className='bg-iris py-2 rounded-full w-full'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CharacterSearch