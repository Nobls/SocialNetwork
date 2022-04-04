export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 23},
            {id: 2, message: 'It\'s my first post', likesCount: 34},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your name?'},
            {id: 3, message: 'HO HO'},
            {id: 3, message: 'HA HA'},
            {id: 3, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
    },
    sideBar: {
      friends: [
          {id: 1, name: 'Dimych',},
          {id: 2, name: 'Andrey',},
          {id: 3, name: 'Sveta',},
      ]
    },
}