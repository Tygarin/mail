import { observer } from 'mobx-react-lite'
import { useEffect, useLayoutEffect, useState } from 'react'
import { lettersList } from '../config/mailConfig'
import fetchData from '../Helpers/fetchData'
import { sliceText } from '../Helpers/sliceText'
import load from '../store/loader'
import folders from '../store/folders'
import Loader from './Loader'
import LetterInside from './LetterInside'
import { Letter } from '../interfaces'
import { folderType } from '../config/baseFolder'
import letters from '../store/letters'

const MailContent = observer(
    () => {
        const [currentLetter, setCurrentLetter] = useState<Letter>({} as Letter)
        const [openInside, setInside] = useState<boolean>(false)
        useEffect(() => {
            fetchData('customUrl')
                .then(res => res === 200 && letters.setLettersList(lettersList))
                .catch(err => console.log(err))
        }, [])

        return (
            <div className='w-full overflow-hidden relative'>
                {!load.loader ? (
                    letters.lettersList
                        ?.filter((letter: Letter) => letter.text.toLowerCase().includes(letters.sortValue.toLowerCase()))
                        ?.map(el => folders.currentFolder === el.type && (
                            <div
                                className='flex w-full py-2 pr-5 cursor-pointer letter-row'
                                key={el.id}
                                onClick={() => {
                                    setCurrentLetter(el)
                                    setInside(true)
                                }}
                            >
                                <div className='w-1/5'>{el.author}</div>
                                <div className='grow flex justify-between'>
                                    <div>{sliceText(el.text)}</div>
                                    <div onClick={e => e.stopPropagation()}>
                                        <select onChange={e => letters.changeLetterType(el.id, e.target.value)}>
                                            <option value={el.type}>{folders.foldersList.find((e: folderType) => e.type === el.type)?.text}</option>
                                            {folders.foldersList.map((e: folderType) =>
                                                e.type !== el.type && <option key={e.id} value={e.type}>{e.text}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div>{new Date(el.date).toDateString()}</div>
                                </div>
                            </div>
                        ))
                ) : <Loader />}
                <LetterInside
                    visible={openInside}
                    currentLetter={currentLetter}
                    closeLetter={() => setInside(false)}
                />
            </div>
        )
    }
)

export default MailContent