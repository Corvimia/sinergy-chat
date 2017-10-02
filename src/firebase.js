import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDIFbo4JZVCWFcdwrTnTw37kxRiNYbQ-24",
    authDomain: "sinergy-chat.firebaseapp.com",
    databaseURL: "https://sinergy-chat.firebaseio.com",
    projectId: "sinergy-chat",
    storageBucket: "",
    messagingSenderId: "1073419341251"
};
firebase.initializeApp(config);

export default firebase;