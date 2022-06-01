export interface folderType {
    type: string,
    text: string,
    id: number,
    touchable?: boolean
}

export const baseFolders: folderType[] = [
    {
        type: 'incoming',
        text: 'Входящие',
        id: 0,
    },
    {
        type: 'sent',
        text: 'Отправленные',
        id: 1,
    },
    {
        type: 'draft',
        text: 'Черновики',
        id: 2,
    },
    {
        type: 'deleted',
        text: 'Удаленные',
        id: 3,
    },
    {
        type: 'spam',
        text: 'Спам',
        id: 4,
    },
]