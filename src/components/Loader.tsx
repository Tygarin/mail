import loader from '../img/loader.svg'

function Loader() {
    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
            <img className='w-10 h-10' src={loader} />
        </div>
    )
}

export default Loader