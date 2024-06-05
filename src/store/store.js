import { createStore } from 'vuex';

const savedTheme = localStorage.getItem('theme') || 'dark';

export const store = createStore({
    state: {
        theme: savedTheme,
        page: 0,
    },
    mutations: {
        setTheme(state) {
            const theme = state.theme === 'light' ? 'dark' : 'light';
            state.theme = theme;
            console.log(theme)
            localStorage.setItem('theme', theme)
        },
        setPage(state, page) {
            state.page = page;
        }
    },
    getters: {
        getPage(state) {
            return state.page;
        },
        getTheme(state) {
            return state.theme
        }
    },

})