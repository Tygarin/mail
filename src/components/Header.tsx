import SearchBar from './SearchBar'

function Header() {
    return (
        <div className='p-5 flex header__wrapper'>
            <div className='px-5 flex items-center'>
                <h1 className='text-lg'>TestMail</h1>
            </div>
            <div className='flex justify-center w-full'>
                <SearchBar />
            </div>
        </div>
    )
}

export default Header