import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: process.env.fireBaseKey,
    authDomain: process.env.fireBaseAuthDomain,
    projectId: process.env.fireBaseProjectId,
    storageBucket: process.env.fireBaseStorageBucket,
    messagingSenderId: process.env.fireBaseMessagingSenderId,
    appId: process.env.fireBaseAppId
})

export const auth = app.auth()
export default app