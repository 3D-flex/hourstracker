import firebase from "../../firebase";

export default {
    state() {
        return {
            user: null
        }
    },
    namespaced: true,
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async login() {

        },
        async register(context, {email, password}) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    context.commit(user)
                    // ...
                })
                .catch((error) => {
                    return Promise.reject(error)
                });
        },
        async logout(){

        }
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    }
}