import { makeAutoObservable } from "mobx";
import { Letter } from "../interfaces";

class Letters {
    lettersList: Letter[] = []
    constructor() {
        makeAutoObservable(this)
    }

    setLettersList(data:Letter[]) {
        const letters = localStorage.getItem('letters')
        this.lettersList = letters ? JSON.parse(letters) :data
    }

    changeLetterType(letterId: number, newType: string) {
        let currentLetter = this.lettersList.find(letter => letter.id === letterId)
        currentLetter!.type = newType
        localStorage.setItem('letters', JSON.stringify(this.lettersList))
    }
}

export default new Letters() 