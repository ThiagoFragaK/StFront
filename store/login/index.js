export default {
    namespaced: true,
    state: {
        userToken: '',
    },
    getters: {},
    mutations: {
        setToken(token) {
            state.userToken = token;
        },
    },
    actions: {},
}
