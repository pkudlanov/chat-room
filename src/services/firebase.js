const config = {
    apiKey: 'AIzaSyAQ1qdSel_wOPt4P5xj7gqJqF4IyugT0As',
    authDomain: 'chat-room-paul.firebaseapp.com',
    databaseURL: 'https://chat-room-paul.firebaseio.com',
    projectId: 'chat-room-paul',
    storageBucket: 'chat-room-paul.appspot.com',
    messagingSenderId: '1038600990823',
    appId: '1:1038600990823:web:2a1e8d941a84d03f'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();

export const chatRoomsDB = firebase.database().ref('chatRooms');