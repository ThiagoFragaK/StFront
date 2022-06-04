import Vuex from 'vuex';

import login from "./login";

const createStore = () => {
    return new Vuex.Store({
        modules: {
            login
        }
    });
}

export default createStore