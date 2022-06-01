import { makeAutoObservable } from "mobx";
import { Letter } from "../interfaces";

class Letters {
    lettersList: Letter[] = []
    sortValue: string = ''
    constructor() {
        makeAutoObservable(this)
    }

    setLettersList(data:Letter[]) {
        const letters = localStorage.getItem('letters')
        this.lettersList = letters ? JSON.parse(letters) :data
    }

    setSortValue(value:string) {
        this.sortValue = value
    }

    changeLetterType(letterId: number, newType: string) {
        let currentLetter = this.lettersList.find(letter => letter.id === letterId)
        currentLetter!.type = newType
    }
}

export default new Letters() 