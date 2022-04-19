export type StoreType = {
    _state: RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    dispatch: (action: AllActionCreatorType) => void
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type FriendsType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogsType[]
    newMessageText: string
}
export type SideBarType = {
    friends: FriendsType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}

export type AllActionCreatorType = AddPostACType | ChangeNewPostACType | AddMessageType | OnMessageChangeACType

type AddPostACType = ReturnType<typeof addPostAC>
type ChangeNewPostACType = ReturnType<typeof onPostChangeAC>
type AddMessageType = ReturnType<typeof addMessageAC>
type OnMessageChangeACType = ReturnType<typeof onMessageChangeAC>

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}

export const onPostChangeAC = (changeText: string) => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        changeText: changeText
    } as const
}

export const addMessageAC = (newMessageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        newPostText: newMessageText
    } as const
}

export const onMessageChangeAC = (changeText: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        changeText: changeText
    } as const
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 23},
                {id: 2, message: 'It\'s my first post', likesCount: 34},
            ],
            newPostText: '',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your name?'},
                {id: 3, message: 'HO HO'},
                {id: 4, message: 'HA HA'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Dima',},
                {id: 2, name: 'Andrey',},
                {id: 3, name: 'Svetlana',},
            ]
        },
    },
    _callSubscriber() {
        console.log('log')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action: AllActionCreatorType) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {id: 3, message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.changeText
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE'){
            const newMessage: MessageType = {id: 10, message: this._state.dialogsPage.newMessageText,}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.changeText
            this._callSubscriber(this._state)
        }
    }

}


/*let renderEntireTree = (state:RootStateType)=> {
    console.log('log')
}*/

/*export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 23},
            {id: 2, message: 'It\'s my first post', likesCount: 34},
        ],
        newPostText: '',
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your name?'},
            {id: 3, message: 'HO HO'},
            {id: 4, message: 'HA HA'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Svetlana'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Dima',},
            {id: 2, name: 'Andrey',},
            {id: 3, name: 'Svetlana',},
        ]
    },
}*/

/*export const addPost = () => {
    const newPost: PostsType = {id: 3, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}*/

/*export const changeNewPostText = (changeText: string) => {
    state.profilePage.newPostText = changeText
    renderEntireTree(state)
}*/

/*
export const subscribe = (observer:any) => {
    renderEntireTree = observer
}*/
