import { useState } from "react"
import folders from "../store/folders";

interface modalProps {
    closeModal: () => void
}

function Modal({ closeModal }: modalProps) {
    const [name, setName] = useState<string>('')
    return (
        <div className="">
            <div className="modal__bg z-50" onClick={closeModal} />
            <div className="modal__window z-50 flex items-center justify-center flex-col gap-y-10">
                <input
                    onChange={e => setName(e.target.value)}
                    className="p-4 border rounded border-solid border-black"
                    type="text"
                    placeholder="Название папки"
                />
                <button
                    onClick={() => {
                        if (name.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i)) {
                            folders.addFolder(name)
                            closeModal()
                        }
                    }}
                    className="btn"
                >
                    Создать папку
                </button>
            </div>
        </div>
    )
}

export default Modal