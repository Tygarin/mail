import { folderType } from "../config/baseFolder"
import trash from '../img/delete.svg'
import pen from '../img/edit.svg'
import letters from '../store/letters'
import { Letter } from '../interfaces'
import { toast } from 'react-toastify'
import folders from '../store/folders'
import { observer } from "mobx-react-lite"
import { useState } from "react"

interface folderProps {
    element: folderType
}

const FolderComponent = observer(
    ({ element }: folderProps) => {
        const [isEdit, setIsEdit] = useState<boolean>(false)
        return (
            <div
                className={`mx-3 flex justify-between items-center cursor-pointer transition pl-1 text-left break-all sidebar__btn 
                ${folders.currentFolder === element.type ? 'current-folder' : ''}`}
            >
                {!isEdit ? (
                    <div
                        className='grow'
                        onClick={() => folders.setCurrentFolder(element.type)} >
                        {element?.text}
                    </div>
                ) :
                    <input
                        type="text"
                        className="w-3/5"
                        placeholder="Название..."
                        onChange={e => folders.changeTypeText(element.id, e.target.value)}
                    />}
                {element.touchable &&
                    <div className="flex items-center">
                        <img className='w-4 h-4'
                            src={pen}
                            onClick={() => { setIsEdit(!isEdit) }}
                        />
                        <img className='w-7 h-7'
                            src={trash}
                            onClick={() => {
                                !letters.lettersList.find((letter: Letter) => letter.type === element.type) ?
                                    folders.removeFolder(element.id) : toast.info('Переместите сообщения в другую папку')
                            }}
                        />
                    </div>
                }
            </div>
        )
    }
)

export default FolderComponent