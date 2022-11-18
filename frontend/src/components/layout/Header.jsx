import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav className="bg-rainbow-indigo mb-12 py-4 shadow-lg text-white">
                <div className='container mx-auto'>
                    <div className="flex-none px-2 mx-2">
                        <Link to='/' className='align-middle font-bold text-lg'>
                            Home
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header