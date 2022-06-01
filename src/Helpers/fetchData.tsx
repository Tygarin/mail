import load from '../store/loader'

function fetchData(url: string) {
    // fetch :)
    return new Promise((res, rej) => {
        load.setLoader()
        setTimeout(() => {
            res(200)
            load.removeLoader()
        }, 1000)
    })
}

export default fetchData