export default {
    namespaced: true,
    state: {
        token: null,
        userCredentials: {}
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
            });
        },
        logout(vuexContext){
            this.$axios.setHeader('Authorization', vuexContext.state.token);
            this.$axios.$post('auth/logout')
            .then(res => {
                return res.response.data;
            });
        },
        setCredentials(vuexContext){
            this.$axios.setHeader('Authorization', vuexContext.state.token);

            return this.$axios.$post('auth/userInfo')
            .then(res => {
                return res; 
            })
            .catch(err => {
                return err.response.data;
            });
        }
    },
}
