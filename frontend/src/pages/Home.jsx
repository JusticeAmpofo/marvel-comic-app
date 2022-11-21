import CharacterSearch from '../components/characters/CharacterSearch'
import CharacterResults from '../components/characters/CharacterResults'

function Home() {
    return (
        <div>
            <h1 className="font-bold mb-8 text-3xl text-center">Marvel Comic Search</h1>
            <CharacterSearch />
            <CharacterResults />
        </div>
    )
}
export default Home