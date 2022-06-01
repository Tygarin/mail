import { makeAutoObservable } from "mobx";
import { baseFolders, folderType } from "../config/baseFolder";

class Folders {
    currentFolder = 'incoming'
    foldersList:folderType[] = localStorage.getItem('folders') ? JSON.parse(localStorage.getItem('folders') || '') : baseFolders
    constructor() {
        makeAutoObservable(this)
    }
    setCurrentFolder(type: string) {
        this.currentFolder = type
    }
    addFolder(name: string) {
        this.foldersList.push({
            type: name,
            text: name,
            id: this.foldersList.length,
            touchable: true
        })
    }
    changeTypeText(id:number, text: string) {
        const current = this.foldersList.find(folder => folder.id === id)
        if(text.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i)) {
            current!.text = text
        }
    }
    removeFolder(id: number) {
        this.foldersList = this.foldersList.filter((e: folderType) => !(e.id === id))
    }
}

export default new Folders() 