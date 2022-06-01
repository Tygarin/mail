import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { folderType } from '../config/baseFolder'
import folders from '../store/folders'
import FolderComponent from './FolderComponent'
import Modal from './Modal'

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
                        <FolderComponent
                            key={el.id}
                            element={el}
                        />
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
                    <Modal closeModal={() => setModal(false)} />}
            </div>
        )
    }
)

export default SideBar