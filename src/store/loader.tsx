import { makeAutoObservable } from "mobx";

class Load {
    loader: boolean = false
    constructor() {
        makeAutoObservable(this)
    }

    setLoader() {
        this.loader = true
    }

    removeLoader() {
        this.loader = false
    }
}

export default new Load() 