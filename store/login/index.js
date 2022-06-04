export default {
    namespaced: true,
    state: {
        status: false,
    },
    getters: {},
    mutations: {
        isLoggedIn(state) {
            state.status = true;
        },
    },
    actions: {},
}
