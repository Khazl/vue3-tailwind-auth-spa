import AuthClient from "@/api/AuthClient";

const state = {
    user: undefined,
}

const getters = {
    getUser () {
        return state.user
    }
}

const actions = {
    async login ({ commit, dispatch }, { email, password, remember }) {
        await AuthClient.setCsrf()
        const userString = localStorage.getItem('user');
        if (userString) {
            return dispatch('checkAuth')
        }
        return AuthClient.login(email, password, remember).then(response => {
            return dispatch('checkAuth')
        }).catch(e => {
            console.error(e)
            commit('setUser', undefined)
        })
    },
    async logout ({ commit }) {
        await AuthClient.setCsrf()
        return AuthClient.logout().then(() => {
            localStorage.removeItem('user');
            commit('setUser', undefined)
        })
    },
    async checkAuth ({ commit }) {
        await AuthClient.setCsrf()
        return AuthClient.checkAuth().then(response => {
            commit('setUser', response.data)
        }).catch(() => {
            commit('setUser', undefined)
        })
    }
}

const mutations = {
    setUser (state, status) {
        if (status) {
            localStorage.setItem('user', JSON.stringify(status));
        }
        state.user = status
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}