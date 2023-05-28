export default {
	namespaced: true,
	state: {
        steamID: undefined,
	},
	mutations: {
        SET_STEAM_ID(state, steamID) {
            state.steamID = steamID;
        },
	},
	actions: {},
};
