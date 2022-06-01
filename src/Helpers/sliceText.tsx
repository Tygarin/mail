export const sliceText = (text: string) => {
    let sliced = text.slice(0, 60)
    if (sliced.length < text.length) sliced += '...'
    return sliced
}