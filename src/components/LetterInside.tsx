import { Letter } from '../interfaces'

interface letterInsideProps {
    currentLetter: Letter,
    visible: boolean,
    closeLetter: () => void
}

function LetterInside({ currentLetter, visible, closeLetter }: letterInsideProps) {
    return (
        <div className={`letter__inside ${visible ? 'letter-visible' : ''}`}>
            <div className='letter-text'>{currentLetter?.text}</div>
            <div className='flex justify-between pr-10 items-end'>
                <p className='cursor-pointer text-xl' onClick={() => closeLetter()}>Назад</p>
                <div>
                    <p>{new Date(currentLetter?.date).toDateString()}</p>
                    <p>{currentLetter?.author}</p>
                </div>
            </div>
        </div>
    )
}

export default LetterInside