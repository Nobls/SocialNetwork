export const store = {
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
    getState(){
        return this._state
    },
    renderEntireTree (state:RootStateType) {
        console.log('log')
    },
    addPost() {
        const newPost: PostsType = {id: 3, message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.renderEntireTree(this._state)
    },
    changeNewPostText(changeText: string) {
        this._state.profilePage.newPostText = changeText
        this.renderEntireTree(this._state)
    },
    subscribe(observer:any) {
        this.renderEntireTree = observer
    },
}

/*let renderEntireTree = (state:RootStateType)=> {
    console.log('log')
}*/

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
}
export type SideBarType = {
    friends: FriendsType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}

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
