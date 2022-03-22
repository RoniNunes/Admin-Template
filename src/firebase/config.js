import firebase from "firebase/app"
import 'firebase/auth'


const API_KEY='+++'
const AUTH_DOMAIN='++++'
const PROJECT_ID='++++'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
    })
}

export default firebase