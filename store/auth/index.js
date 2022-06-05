export default {
    namespaced: true,
    state: {
        token: null
    },
    getters: {
        isAuthenticated(){
            return state.token != null;
        },
        getToken(){
            return state.token;
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = 'Bearer '+token;
        },
    },
    actions: {
        login(vuexContext, form){
            return this.$axios.$post('login', {
                name: form.name,
                password: form.password
            })
            .then(res => {
                vuexContext.commit('setToken', res.token);
                return res.status; 
            })
            .catch(err => {
                return err.response.data;
            })
        }
    },
}
