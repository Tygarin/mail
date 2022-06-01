import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { folderType } from '../config/baseFolder'
import folders from '../store/folders'
import Modal from './Modal'
import trash from '../img/delete.svg'
import letters from '../store/letters'
import { Letter } from '../interfaces'
import { toast } from 'react-toastify'

const SideBar = observer(
    () => {
        const [modal, setModal] = useState<boolean>(false)
        useEffect(() => {
            return function () {
                localStorage.setItem('folders', JSON.stringify(folders.foldersList))
            }
        })
        return (
            <div className='w-64 h-full'>
                <div className="flex flex-col overflow-auto sidebar__inside gap-y-4">
                    {folders.foldersList.map((el: folderType) => (
                        <div
                            className={`mx-3 flex justify-between items-center cursor-pointer transition pl-1 text-left break-all sidebar__btn ${folders.currentFolder === el.type ? 'current-folder' : ''}`}
                            key={el.id}
                        >
                            <div
                                className='grow'
                                onClick={() => folders.setCurrentFolder(el.type)} >
                                {el?.text}
                            </div>
                            {el.touchable &&
                                <img className='w-7 h-7'
                                    src={trash}
                                    onClick={() => {
                                        !letters.lettersList.find((letter: Letter) => letter.type === el.type) ?
                                            folders.removeFolder(el.id) : toast.info('Переместите сообщения в другую папку')
                                    }}
                                />
                            }
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <button
                        className='btn ml-4'
                        onClick={() => setModal(true)}
                    >
                        Создать папку
                    </button>
                </div>
                {modal &&
                    <Modal
                        closeModal={() => setModal(false)}
                    />}
            </div>
        )
    }
)

export default SideBar